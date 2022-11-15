import { CheckBoxContaienr, CheckBoxIndicator } from './styles'
import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContaienr> {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxContaienr {...props}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContaienr>
  )
}

CheckBox.displayName = 'CheckBox'
