import { ComponentProps, ReactNode } from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'

import * as S from './styles'

export type TooltipProps = ComponentProps<typeof RadixTooltip.Root> & {
  content?: ReactNode
}

export function Tooltip({ children, content, ...rest }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...rest}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <S.TooltipContent sideOffset={5}>
            {content}

            <RadixTooltip.Arrow />
          </S.TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
