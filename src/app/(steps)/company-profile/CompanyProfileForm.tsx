'use client'
import { FormMultiStep } from '@/components'
import { companyProfileTabs } from '@/data'
import { CompanyProfileSchema } from '@/schema'
import { CompanyProfile, TabContent } from '@/interfaces'
import { TabContentInformation, TabContentProjectGoals, TabContentKnowledgeLevel, TabContentAdditionalNotes } from './tab-contents'

export const CompanyProfileForm = () => {
  const defaultInitialValues: CompanyProfile = {
    industry: "",
    companySize: "",
    fullName: "",
    email: "",
    phone: "",
    projectGoals: [],
    otherGoal: "",
    knowledgeLevel: "",
    additionalNotes: "",
  }

  const tabContent = {
    information: ({ values, errors, touched, setFieldValue }: TabContent<CompanyProfile>) => (
      <TabContentInformation
        values={ values }
        errors={ errors }
        touched={ touched }
        setFieldValue={ setFieldValue }
      />
    ),
    projectGoals: ({ values, errors, touched, setFieldValue }: TabContent<CompanyProfile>) => (
      <TabContentProjectGoals
        values={ values }
        errors={ errors }
        touched={ touched }
        setFieldValue={ setFieldValue }
      />
    ),
    knowledgeLevel: ({ values, errors, touched, setFieldValue }: TabContent<CompanyProfile>) => (
      <TabContentKnowledgeLevel
        values={ values }
        errors={ errors }
        touched={ touched }
        setFieldValue={ setFieldValue }
      />
    ),
    additionalNotes: ({ values, errors, touched, setFieldValue }: TabContent<CompanyProfile>) => (
      <TabContentAdditionalNotes
        values={ values }
        errors={ errors }
        touched={ touched }
        setFieldValue={ setFieldValue }
      />
    )
  }

  return (
    <FormMultiStep
      nextStep="/project-scope"
      formKey="CompanyProfile"
      tabs={companyProfileTabs}
      validationSchema={CompanyProfileSchema}
      defaultValues={defaultInitialValues}
      tabContent={tabContent}
    />
  )
}
