import { FormOptionList } from '@/components'
import { mainPurpose } from '@/data'
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
      <FormControl className="flex-1" error={Boolean(errors.mainPurpose && touched.mainPurpose)}>
        <FormOptionList
          options={mainPurpose}
          selectedOptions={values.mainPurpose}
          onChange={(newValue) => setFieldValue('mainPurpose', newValue)}
          error={Boolean(errors.mainPurpose && touched.mainPurpose)}
          helperText={touched.mainPurpose && errors.mainPurpose ? errors.mainPurpose : ''}
          type="radio"
        />
      </FormControl>
      <div className="mt-8 font-sm text-gray-400">
        We’ll tailor the interface based on your selection. You can change this level at any time if you feel it doesn’t match your needs.
      </div>
    </TabContentTemplate>
  )
}