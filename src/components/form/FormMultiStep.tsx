'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Formik,
  Form,
  FormikHelpers,
  FormikErrors,
  FormikValues,
  FormikTouched,
} from 'formik'
import * as Yup from 'yup'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { QuoteFormTemplate } from '@/templates'
import { MainButton, FormButtonsWrapper } from '@/components'
import { Tab, TabContent } from '@/interfaces'

interface FormMultiStepProps<T extends FormikValues> {
  nextStep: string
  formKey: string
  tabs: Tab[]
  validationSchema: Record<string, Yup.ObjectSchema<Partial<T>>>
  defaultValues: T
  tabContent: Record<string, (props: TabContent<T>) => JSX.Element>
  onSubmit?: (values: T) => void
}

export const FormMultiStep = <T extends FormikValues>({
  nextStep,
  formKey,
  tabs,
  validationSchema,
  defaultValues,
  tabContent,
  onSubmit,
}: FormMultiStepProps<T>) => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
  const [completedTabs, setCompletedTabs] = useState<Set<string>>(new Set())
  const [initialValues, setInitialValues] = useState<T>(defaultValues)

  useEffect(() => {
    const savedValues = Cookies.get(formKey)
    if (savedValues) {
      const parsedValues = JSON.parse(savedValues) as T
      setInitialValues(parsedValues)

      const completed = new Set<string>()
      tabs.forEach((tab) => {
        const tabSchema = validationSchema[tab.id]
        if (!tabSchema) return

        const fields = Object.keys(tabSchema.fields) as (keyof T)[]
        const isTabComplete = fields.every((field) => {
          return parsedValues[field] !== undefined && parsedValues[field] !== ""
        })

        if (isTabComplete) completed.add(tab.id)
      })
      setCompletedTabs(completed)
    }
  }, [formKey, tabs, validationSchema])

  const handleSubmit = async (
    values: T,
    { setSubmitting }: FormikHelpers<T>
  ) => {
    setCompletedTabs(
      (prev) => new Set([...Array.from(prev), tabs[tabs.length - 1].id])
    )
    Cookies.set(formKey, JSON.stringify({ ...values, formSubmitted: true }), { expires: 7 })
    toast.success("Data Saved!")
    setSubmitting(false)

    if (onSubmit) {
      onSubmit(values)
    } else {
      router.push(nextStep)
    }
  }

  const validateAndNavigate = async <T extends object>(
    values: T,
    errors: Partial<Record<keyof T, string>>,
    activeTab: string,
    nextTab: string | undefined,
    setTouched: (
      touched: FormikTouched<T>,
      shouldValidate?: boolean
    ) => Promise<void | FormikErrors<T>>,
    validateForm: (values?: T) => Promise<FormikErrors<T>>,
    setActiveTab: (tab: string) => void
  ) => {
    // Obtener solo los campos de la pestaña actual
    const currentTabSchema = validationSchema[activeTab]

    if (!currentTabSchema) return

    const fieldsInTab = Object.keys(currentTabSchema.fields) as (keyof T)[]
    const formErrors = await validateForm(values)

    // Filtrar solo los errores de la pestaña actual
    const tabErrors = fieldsInTab.filter((field) => formErrors[field])

    if (tabErrors.length > 0) {
      // Marcar solo los campos de la pestaña actual como tocados
      await setTouched(
        fieldsInTab.reduce(
          (acc, key) => ({ ...acc, [key]: true }),
          {} as FormikTouched<T>
        ),
        true
      )
      return
    }
    Cookies.set(formKey, JSON.stringify(values), { expires: 7 })
    // Si la validación de la pestaña actual es exitosa, avanzar
    if (nextTab) {
      setActiveTab(nextTab)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape(
        Object.values(validationSchema).reduce(
          (acc, schema) => ({ ...acc, ...schema.fields }),
          {}
        )
      )}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        setTouched,
        validateForm,
      }) => (
        <QuoteFormTemplate
          tabList={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          completedTabs={completedTabs}
        >
          <Form className="flex flex-col flex-1">
            <div className="flex-1">
              {tabContent[activeTab] &&
                tabContent[activeTab]({
                  values: values as T,
                  errors: errors as Partial<Record<keyof T, string>>,
                  touched: touched as Partial<Record<keyof T, boolean>>,
                  handleChange,
                  activeTab,
                  setFieldValue,
                })}
            </div>
            <FormButtonsWrapper>
              <div></div>
              {activeTab === tabs[tabs.length - 1].id ? (
                <MainButton type="submit" label="Submit" />
              ) : (
                <MainButton
                  type="button"
                  label="Continue"
                  onClick={async (e) => {
                    e.preventDefault()
                    const currentIndex = tabs.findIndex(
                      (tab) => tab.id === activeTab
                    )
                    await validateAndNavigate(
                      values as T,
                      errors as Partial<Record<keyof T, string>>,
                      activeTab,
                      tabs[currentIndex + 1]?.id,
                      setTouched,
                      validateForm,
                      setActiveTab
                    )
                  }}
                />
              )}
            </FormButtonsWrapper>
          </Form>
        </QuoteFormTemplate>
      )}
    </Formik>
  )
}
