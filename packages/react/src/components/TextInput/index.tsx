import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContaienr } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContaienr>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContaienr>
  )
}

TextInput.displayName = 'TextInput'
