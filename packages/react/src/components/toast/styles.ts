import * as Toast from '@radix-ui/react-toast'

import { keyframes, styled } from '../../styles'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastContainer = styled(Toast.Root, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },

  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$5 $3',
  position: 'relative',
})

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  lineHeight: '$base',
  fontFamily: '$default',
  fontSize: '$xl',
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  lineHeight: '$base',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  marginTop: '$1',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$4',
  right: '$4',
  fontSize: 0,
  background: 'transparent',
  border: 0,
  cursor: 'pointer',

  svg: {
    height: '$5',
    width: '$5',
    color: '$gray200',
  },
})