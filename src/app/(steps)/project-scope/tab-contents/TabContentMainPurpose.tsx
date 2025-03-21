import { FormOptionList } from '@/components'
import { knowledgeLevels } from '@/data'
import { CompanyProfile, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl } from '@mui/joy'

export const TabContentMainPurpose = ({
  values,
  errors,
  touched,
  setFieldValue,
}: TabContent<CompanyProfile>) => {
  return (
    <TabContentTemplate
      title="What Is Your Knowledge Level?"
      description="Choose the option that best describes your technical knowledge level."
    >
      <FormControl className="flex-1" error={Boolean(errors.knowledgeLevel && touched.knowledgeLevel)}>
        <FormOptionList
          options={knowledgeLevels}
          selectedOptions={values.knowledgeLevel}
          onChange={(newValue) => setFieldValue('knowledgeLevel', newValue)}
          error={Boolean(errors.knowledgeLevel && touched.knowledgeLevel)}
          helperText={touched.knowledgeLevel && errors.knowledgeLevel ? errors.knowledgeLevel : ''}
          type="radio"
        />
      </FormControl>
      <div className="mt-8 font-sm text-gray-400">
        We’ll tailor the interface based on your selection. You can change this level at any time if you feel it doesn’t match your needs.
      </div>
    </TabContentTemplate>
  )
}