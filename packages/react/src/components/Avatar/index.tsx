import { ComponentProps } from 'react'
import { AvatarContaienr, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContaienr>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContaienr>
  )
}

Avatar.displayName = 'Avatar'
