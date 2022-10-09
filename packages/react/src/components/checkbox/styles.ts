import * as Checkbox from '@radix-ui/react-checkbox'

import { styled, keyframes } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '2px solid transparent',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus': {
    borderColor: '$ignite300',
  },
})

const fadeIn = keyframes({
  from: {
    transform: 'scale(0.5)',
  },
  to: {
    transform: 'scale(1)',
  },
})
const fadeOut = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(0.5)',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${fadeIn} 100ms`,
  },
  '&[data-state="unchecked"]': {
    animation: `${fadeOut} 100ms`,
  },
})
