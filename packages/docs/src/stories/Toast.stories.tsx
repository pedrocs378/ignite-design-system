import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Toast,
  ToastProvider,
  ToastProps,
  Button,
} from '@igniteui-pedrocs378/react'
import { useState } from 'react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta feira, 23 de Outubro as 16h',
    duration: 5000,
  },
  argTypes: {
    duration: {
      control: {
        type: 'number',
        min: 500,
        step: 500,
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false)

      return (
        <ToastProvider>
          <Box
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '$10 0',
            }}
          >
            <Button onClick={() => setIsOpen(true)}>Show Toast</Button>

            {Story({
              args: { ...args, open: isOpen, onOpenChange: setIsOpen },
            })}
          </Box>
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
