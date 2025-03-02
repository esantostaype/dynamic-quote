import { CompanyProfile, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl, FormHelperText, Textarea } from '@mui/joy'

export const TabContentAdditionalNotes = ({
  values,
  errors,
  touched,
  setFieldValue
}: TabContent<CompanyProfile>) => {
  return (
    <TabContentTemplate
      title="Anything else we should know?"
      description="Add any specific requirements, clarifications, or questions you have about your project. Our AI assistant will use this information to refine your solution."
    >
      <FormControl className="flex-1" error={ Boolean( errors.additionalNotes && touched.additionalNotes )}>
        <Textarea
          size="lg"
          id="additionalNotes"
          value={values.additionalNotes}
          minRows={4}
          onChange={( event ) => setFieldValue("additionalNotes", event.target.value)}
          placeholder="Feel free to describe unique features, design preferences, or business goals not covered in previous sections."
        />
        { touched.additionalNotes && errors.additionalNotes && (
          <FormHelperText>{ errors.additionalNotes }</FormHelperText>
        )}
      </FormControl>
    </TabContentTemplate>
  )
}