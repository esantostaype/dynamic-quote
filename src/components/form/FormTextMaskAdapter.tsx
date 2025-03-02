'use client'
import * as React from 'react'
import { IMaskInput } from 'react-imask'

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  name: string
}

export const FormTextMaskAdapter = React.forwardRef<HTMLElement, CustomProps>(
  function FormTextMaskAdapter(props, ref) {
    const { onChange, ...other } = props
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{
          '#': /[1-9]/
        }}
        inputRef={ref as React.Ref<HTMLInputElement>}
        onAccept={(value: string) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    )
  }
)
