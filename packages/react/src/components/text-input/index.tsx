import { ComponentProps } from 'react'

import * as S from './styles'

export type TextInputProps = ComponentProps<typeof S.Input> & {
  prefix?: string
}

export function TextInput({ prefix, ...rest }: TextInputProps) {
  return (
    <S.TextInputContainer>
      {!!prefix && <S.Prefix>{prefix}</S.Prefix>}

      <S.Input {...rest} />
    </S.TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
