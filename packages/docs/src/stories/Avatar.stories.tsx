import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@gadiegon/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/gadiegon.png',
    alt: 'Gadiego Nogueira',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WhithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
