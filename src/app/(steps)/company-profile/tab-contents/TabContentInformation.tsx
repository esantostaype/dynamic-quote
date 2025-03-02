import { FormSubtitle, FormTextMaskAdapter } from '@/components'
import { companySize, industry } from '@/data'
import { CompanyProfile, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl, FormHelperText, FormLabel, Input, Option, Select } from '@mui/joy'

export const TabContentInformation = ({ values, errors, touched, setFieldValue }: TabContent<CompanyProfile> ) => {
  return (
    <TabContentTemplate
      title="Let’s Get to Know Your Business"
      description="We want to understand your industry, company size, and contact details. This helps us tailor our approach to your needs."
    >
      <FormSubtitle subtitle="Business Details" />
      <div className="flex flex-col lg:flex-row gap-8">
        <FormControl className="flex-1" error={ Boolean( errors.industry && touched.industry )} >
          <FormLabel>Industry</FormLabel>
          <Select
            size="lg"
            value={values.industry}
            onChange={(event, newValue) =>
              setFieldValue("industry", newValue ?? "")
            }
            placeholder="Select Industry"
          >
            { industry.map((item) => (
              <Option key={item} value={item}>
                { item }
              </Option>
            ))}
          </Select>
          { touched.industry && errors.industry && (
            <FormHelperText>{ errors.industry }</FormHelperText>
          )}
        </FormControl>
        <FormControl className="flex-1" error={Boolean( errors.companySize && touched.companySize )} >
          <FormLabel>Company Size</FormLabel>
          <Select
            size="lg"
            value={ values.companySize }
            onChange={( event, newValue ) =>
              setFieldValue("companySize", newValue ?? "")
            }
            placeholder="Select Company Size"
          >
            { companySize.map(( item ) => (
              <Option key={ item } value={ item }>
                { item }
              </Option>
            ))}
          </Select>
          { touched.companySize && errors.companySize && (
            <FormHelperText>{ errors.companySize }</FormHelperText>
          )}
        </FormControl>
      </div>
      <FormSubtitle subtitle="Your Contact Details" />
      <div className="flex flex-col gap-8">
        <FormControl className="flex-1" error={ Boolean( errors.fullName && touched.fullName ) }>
          <FormLabel>Full Name</FormLabel>
          <Input
            autoComplete="none"
            size="lg"
            id="fullName"
            value={ values.fullName }
            onChange={( event ) => setFieldValue("fullName", event.target.value)}
          />
          { touched.fullName && errors.fullName && (
            <FormHelperText>{ errors.fullName }</FormHelperText>
          )}
        </FormControl>
        <div className="flex flex-col lg:flex-row gap-8">
          <FormControl className="flex-1" error={ Boolean( errors.email && touched.email )}>
            <FormLabel>Email</FormLabel>
            <Input
              autoComplete="none"
              size="lg"
              id="email"
              value={values.email}
              onChange={( event ) => setFieldValue("email", event.target.value)}
            />
            { touched.email && errors.email && (
              <FormHelperText>{ errors.email }</FormHelperText>
            )}
          </FormControl>
          <FormControl className="flex-1">
            <FormLabel>Phone</FormLabel>
            <Input
              autoComplete="none"
              size="lg"
              id="phone"
              value={values.phone}
              onChange={( event ) => setFieldValue("phone", event.target.value)}
              slotProps={{ input: { component: FormTextMaskAdapter } }}
            />
          </FormControl>
        </div>
      </div>
    </TabContentTemplate>
  )
}
