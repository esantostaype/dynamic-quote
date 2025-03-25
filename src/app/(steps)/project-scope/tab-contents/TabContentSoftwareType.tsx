import { FormOptionList } from '@/components'
import { softwareType } from '@/data'
import { ProjectScope, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl } from '@mui/joy'

export const TabContentSoftwareType = ({
  values,
  errors,
  touched,
  setFieldValue,
}: TabContent<ProjectScope>) => {
  return (
    <TabContentTemplate
      title="Define Your Project Scope"
      description="Select the type of software you need and describe its main purpose. This helps us shape the features that best fit your goals."
    >
      <FormControl className="flex-1" error={Boolean(errors.softwareType && touched.softwareType)}>
        <FormOptionList
          options={softwareType}
          selectedOptions={values.softwareType}
          onChange={(newValue) => setFieldValue('softwareType', newValue)}
          error={Boolean(errors.softwareType && touched.softwareType)}
          helperText={touched.softwareType && errors.softwareType ? errors.softwareType : ''}
          type="card-radio"
        />
      </FormControl>
    </TabContentTemplate>
  )
}