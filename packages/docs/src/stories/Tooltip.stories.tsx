import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@igniteui-pedrocs378/react'
import { ArrowRight, Question } from 'phosphor-react'

export default {
  title: 'Data display/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Button aria-label="Next">
        <ArrowRight weight="bold" />
      </Button>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '$10 0',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: 'Next',
  },
}

export const WithIcon: StoryObj<TooltipProps> = {
  args: {
    content: (
      <>
        <Question size={20} />
        <Text size="sm">Next page</Text>
      </>
    ),
  },
  argTypes: {
    content: {
      control: {
        type: null,
      },
    },
  },
}
