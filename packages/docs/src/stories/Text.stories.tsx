import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@igniteui-pedrocs378/react'

const sizes = [
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '4xl',
  '5xl',
  '6xl',
  '7xl',
  '8xl',
  '9xl',
]

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae animi magni maiores enim voluptates veritatis iusto tenetur, nulla quasi corrupti aut quia, esse incidunt numquam eum debitis magnam eveniet vero?',
  },
  argTypes: {
    size: {
      options: sizes,
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
