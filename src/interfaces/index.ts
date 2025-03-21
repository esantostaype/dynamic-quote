export interface Step {
  path: string
  icon: React.ReactNode
  title: string
  key: string
}

export interface Tab {
  id: string
  label: string
  icon: React.ReactNode
}

export interface CheckboxRadioOption {
  label: string
  description?: string
  helperText?: string
}

export interface TabContent<T> {
  values: T
  errors: Partial<Record<keyof T, string>>
  touched: Partial<Record<keyof T, boolean>>
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  activeTab?: string
  setFieldValue: (field: string, value: unknown) => void
}

export interface CompanyProfile {
  industry: string
  companySize: string
  fullName: string
  email: string
  phone: string
  projectGoals: string[]
  otherGoal?: string
  knowledgeLevel: string
  additionalNotes: string
}

export interface ProjectScope {
  softwareType: string
  mainPurpose: string
  specificFocus: string
}