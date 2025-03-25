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
  type?: 'checkbox' | 'radio' | 'card-radio'
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
      onChange(value)
    }
  }

  return (
    <FormControl className="flex-1" error={error}>
      <ul className={`flex ${ type === 'card-radio' ? 'flex-wrap gap-4' : 'flex-col gap-2'}`}>
        { options.map((option) => {
          const isSelected =
            (Array.isArray(selectedOptions) && selectedOptions.includes(option.label)) ||
            selectedOptions === option.label

          return (
            <li
              key={option.label}
              className={`transition-all duration-300 cursor-pointer flex items-start justify-between relative rounded ${
                isSelected ? 'soft-bg-success' : 'soft-bg' } ${ type === 'card-radio' ? 'flex-[0_0_calc(50%-0.5rem)] p-8' : 'flex-1 p-4'}`}
              onClick={() => type === 'card-radio' && handleChange(option.label)}
            >
              {type === 'checkbox' ? (
                <>
                <Checkbox
                  overlay
                  label={option.label}
                  checked={Array.isArray(selectedOptions) && selectedOptions.includes(option.label)}
                  onChange={() => handleChange(option.label)}
                />
                { option.description && (
                  <div className="flex gap-6 items-center flex-[0_0_70%]">
                    <span className="text-sm opacity-60">{option.description}</span>
                    <Button size="sm" startDecorator={<Info size={18} />} variant="plain" className="text-nowrap z-[999]">
                      Not sure?
                    </Button>
                  </div>
                )}
                </>
              ) : type === 'radio' ? (
                <>
                <Radio
                  overlay
                  label={option.label}
                  checked={selectedOptions === option.label}
                  onChange={() => handleChange(option.label)}
                />
                { option.description && (
                  <div className="flex gap-6 items-center flex-[0_0_70%]">
                    <span className="text-sm opacity-60">{ option.description }</span>
                    <Button size="sm" startDecorator={<Info size={18} />} variant="plain" className="text-nowrap z-[999]">
                      Not sure?
                    </Button>
                  </div>
                )}
                </>
              ) : (
                <div className="flex gap-4">
                  <div className={`${ isSelected ? "text-accent" : "" } transition-all duration-300`}>{ option.icon }</div>
                  <div>
                    <div className={`${ isSelected ? "text-accent" : "" } font-semibold text-lg transition-all duration-300`}>{ option.label }</div>
                    <div className={`${ isSelected ? "text-white" : "text-gray-400" } transition-all duration-300`}>{ option.description }</div>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>
      { error && helperText && <FormHelperText>{ helperText }</FormHelperText>}
    </FormControl>
  )
}
