import { CompanyProfile } from '@/interfaces';
import * as Yup from 'yup'

export const CompanyProfileSchema: Record<
  string,
  Yup.ObjectSchema<Partial<CompanyProfile>>
> = {
  information: Yup.object().shape({
    industry: Yup.string().required("Industry is required"),
    companySize: Yup.string().required("Company Size is required"),
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().nullable(),
  }) as Yup.ObjectSchema<Partial<CompanyProfile>>,

  projectGoals: Yup.object().shape({
    projectGoals: Yup.array()
      .of(Yup.string())
      .min(1, "At least one project goal is required"),
  }) as Yup.ObjectSchema<Partial<CompanyProfile>>,

  knowledgeLevel: Yup.object().shape({
    knowledgeLevel: Yup.string().required("Knowledge Level is required"),
  }) as Yup.ObjectSchema<Partial<CompanyProfile>>,

  additionalNotes: Yup.object().shape({
    additionalNotes: Yup.string(),
  }) as Yup.ObjectSchema<Partial<CompanyProfile>>,
};

export const FormSchemaStep2 = Yup.object().shape({
	q4: Yup.string().required('This field is required'),
	q5: Yup.string().required('This field is required'),
	q6: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q7: Yup.string().required('This field is required'),
	q8: Yup.string().required('This field is required')
})

export const FormSchemaStep3 = Yup.object().shape({
	q9: Yup.string().required('This field is required'),
	q10: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q12: Yup.string().required('This field is required'),
	q13: Yup.string().required('This field is required'),
	q14: Yup.string().when('q13', {
		is: (value: string) => typeof value === 'string' && value === 'Yes',
		then: (schema) => schema.required('This field is required'),
		otherwise: (schema) => schema.notRequired(),
	})
})

export const FormSchemaStep4 = Yup.object().shape({
	q15: Yup.string().required('This field is required'),
	q16: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q17: Yup.string().required('This field is required'),
	q18: Yup.string().required('This field is required'),
	q19: Yup.string().required('This field is required')
})

export const FormSchemaStep5 = Yup.object().shape({
	q20: Yup.string().required('This field is required'),
	q21: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q22: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
})

export const FormSchemaStep6 = Yup.object().shape({
	q23: Yup.array()
	.min(1, 'This field is required')
	.required('This field is required'),
	q24: Yup.string().required('This field is required')
})