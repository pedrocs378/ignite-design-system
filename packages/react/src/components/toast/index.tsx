import { ComponentProps } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'

import * as S from './styles'

export type ToastProviderProps = ToastPrimitive.ToastProviderProps

export function ToastProvider({ children, ...rest }: ToastProviderProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" {...rest}>
      {children}

      <S.Viewport />
    </ToastPrimitive.Provider>
  )
}
ToastProvider.displayName = 'ToastProvider'

export type ToastProps = ComponentProps<typeof S.ToastContainer> & {
  title: string
  description?: string
}

export function Toast({ children, title, description, ...rest }: ToastProps) {
  return (
    <S.ToastContainer {...rest}>
      <S.ToastClose aria-label="CLose">
        <X />
      </S.ToastClose>

      <S.ToastTitle>{title}</S.ToastTitle>

      {description && <S.ToastDescription>{description}</S.ToastDescription>}
    </S.ToastContainer>
  )
}
Toast.displayName = 'Toast'
