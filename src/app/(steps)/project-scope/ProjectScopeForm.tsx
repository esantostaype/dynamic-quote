'use client'
import { FormMultiStep } from '@/components'
import { projectScopeTabs } from '@/data'
import { CompanyProfileSchema } from '@/schema'
import { ProjectScope, TabContent } from '@/interfaces'
import { TabContentSoftwareType, TabContentMainPurpose } from './tab-contents'

export const ProjectScopeForm = () => {
  const defaultInitialValues: ProjectScope = {
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
    softwareType: ({ values, errors, touched, setFieldValue }: TabContent<ProjectScope>) => (
      <TabContentSoftwareType
        values={ values }
        errors={ errors }
        touched={ touched }
        setFieldValue={ setFieldValue }
      />
    ),
    mainPurpose: ({ values, errors, touched, setFieldValue }: TabContent<ProjectScope>) => (
      <TabContentMainPurpose
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
      formKey="ProjectScope"
      tabs={projectScopeTabs}
      validationSchema={CompanyProfileSchema}
      defaultValues={defaultInitialValues}
      tabContent={tabContent}
    />
  )
}
