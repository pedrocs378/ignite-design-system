import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@igniteui-pedrocs378/react'

const sizes = ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl']
const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export default {
  title: 'Typography/Heading',
  component: Heading,
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
    as: {
      options: headings,
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
