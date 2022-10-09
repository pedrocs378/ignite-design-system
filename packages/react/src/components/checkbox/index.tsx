import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'

import * as S from './styles'

export type CheckboxProps = ComponentProps<typeof S.CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckboxContainer {...props}>
      <S.CheckboxIndicator asChild>
        <Check weight="bold" />
      </S.CheckboxIndicator>
    </S.CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
