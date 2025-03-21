import { FormOptionList } from '@/components'
import { softwareType } from '@/data'
import { ProjectScope, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl } from '@mui/joy'

export const TabContentMainPurpose = ({
  values,
  errors,
  touched,
  setFieldValue,
}: TabContent<ProjectScope>) => {
  return (
    <TabContentTemplate
      title="What Is Your Knowledge Level?"
      description="Choose the option that best describes your technical knowledge level."
    >
      <FormControl className="flex-1" error={Boolean(errors.softwareType && touched.softwareType)}>
        <FormOptionList
          options={softwareType}
          selectedOptions={values.softwareType}
          onChange={(newValue) => setFieldValue('softwareType', newValue)}
          error={Boolean(errors.softwareType && touched.softwareType)}
          helperText={touched.softwareType && errors.softwareType ? errors.softwareType : ''}
          type="radio"
        />
      </FormControl>
      <div className="mt-8 font-sm text-gray-400">
        We’ll tailor the interface based on your selection. You can change this level at any time if you feel it doesn’t match your needs.
      </div>
    </TabContentTemplate>
  )
}