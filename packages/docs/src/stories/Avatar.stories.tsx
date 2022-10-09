import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@igniteui-pedrocs378/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    src: 'https://github.com/pedrocs378.png',
    alt: 'Pedro Cesar',
  },
}
export const WithFallback: StoryObj<AvatarProps> = {}
