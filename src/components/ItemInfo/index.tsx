import { Container } from './sytles'
import { Icon, IconProps } from './Icon/Icon'

interface ItemInfoProps extends IconProps {
  text: string
}

export function ItemInfo({ type, color, text }: ItemInfoProps) {
  return (
    <Container>
      <Icon type={type} color={color} />
      <p>{text}</p>
    </Container>
  )
}
