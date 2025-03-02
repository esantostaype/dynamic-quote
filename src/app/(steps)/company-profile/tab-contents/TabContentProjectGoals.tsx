import { FormOptionList } from '@/components'
import { projectGoals } from '@/data'
import { CompanyProfile, TabContent } from '@/interfaces'
import { TabContentTemplate } from '@/templates'
import { FormControl, Input } from '@mui/joy'

export const TabContentProjectGoals = ({
  values,
  errors,
  touched,
  setFieldValue
}: TabContent<CompanyProfile>) => {

  const isOtherSelected = values.projectGoals.includes('Other')
  const handleProjectGoalsChange = (newValues: string[] | string) => {
    setFieldValue('projectGoals', newValues)

    // Si "Other" se deselecciona, eliminar "otherGoal"
    if (!newValues.includes('Other')) {
      setFieldValue('otherGoal', '')
    }
  }

  return (
    <TabContentTemplate
      title="What Are You Aiming For?"
      description="Choose or add the key goals you’d like to accomplish. This helps us focus on what truly matters for your business."
    >
      <FormControl className="flex-1" error={Boolean(errors.projectGoals && touched.projectGoals)}>
        <FormOptionList
          options={projectGoals}
          selectedOptions={values.projectGoals}
          onChange={handleProjectGoalsChange}
          error={Boolean(errors.projectGoals && touched.projectGoals)}
          helperText={touched.projectGoals && errors.projectGoals ? errors.projectGoals : ''}
          type="checkbox"
        />
      </FormControl>
      { isOtherSelected && (
        <FormControl className="mt-4">
          <Input
            name="otherGoal"
            id="otherGoal"
            placeholder="Please specify your goal"
            value={ values.otherGoal }
            onChange={( event ) => setFieldValue("otherGoal", event.target.value)}
          />
        </FormControl>
      )}
    </TabContentTemplate>
  )
}