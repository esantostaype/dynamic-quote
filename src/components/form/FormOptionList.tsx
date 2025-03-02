'use client'
import { CheckboxRadioOption } from '@/interfaces'
import { Button, Checkbox, FormControl, FormHelperText, Radio } from '@mui/joy'
import { Info } from '@phosphor-icons/react'

interface Props {
  options: CheckboxRadioOption[]
  selectedOptions: string[] | string
  onChange: (value: string | string[]) => void
  error?: boolean
  helperText?: string
  type?: 'checkbox' | 'radio'
}

export const FormOptionList = ({
  options,
  selectedOptions,
  onChange,
  error,
  helperText,
  type = 'checkbox',
}: Props) => {
  const handleChange = (value: string) => {
    if (type === 'checkbox') {
      const currentSelections = Array.isArray(selectedOptions) ? selectedOptions : []
      const newSelections = currentSelections.includes(value)
        ? currentSelections.filter((item) => item !== value)
        : [...currentSelections, value]
      onChange(newSelections)
    } else {
      onChange( value )
    }
  }

  return (
    <FormControl className="flex-1" error={error}>
      <ul className="flex flex-col gap-2">
        {options.map((option) => (
          <li
            key={option.label}
            className={`flex items-center justify-between relative p-4 rounded transition-colors ${
              (Array.isArray(selectedOptions) && selectedOptions.includes(option.label)) ||
              selectedOptions === option.label
                ? 'soft-bg-success'
                : 'soft-bg'
            }`}
          >
            {type === 'checkbox' ? (
              <Checkbox
                overlay
                label={option.label}
                checked={Array.isArray(selectedOptions) && selectedOptions.includes(option.label)}
                onChange={() => handleChange(option.label)}
              />
            ) : (
              <Radio
                overlay
                label={option.label}
                checked={selectedOptions === option.label}
                onChange={() => handleChange(option.label)}
              />
            )}
            {
              option.description &&
              <div className="flex gap-6 items-center flex-[0_0_70%]">
                <span className="text-sm opacity-60">{ option.description }</span>
                <Button size='sm' startDecorator={<Info size={ 18 } />} variant='plain' className="text-nowrap z-[999]">Not sure?</Button>
              </div>
            }
          </li>
        ))}
      </ul>
      {error && helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
