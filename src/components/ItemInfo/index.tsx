import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { Container, ContainerIcon } from './sytles'

interface ItemInfoProps {
  text: string
  type: 'ShoppingCart' | 'Timer' | 'Package' | 'Coffee'
  color: 'brandYellowDark' | 'brandYellow' | 'baseText' | 'brandPurple'
}

export function ItemInfo({ text, type, color }: ItemInfoProps) {
  // Definindo o ícone com base no tipo
  let iconComponent
  switch (type) {
    case 'ShoppingCart':
      iconComponent = <ShoppingCart size={16} weight="fill" />
      break
    case 'Timer':
      iconComponent = <Timer size={16} weight="fill" />
      break
    case 'Package':
      iconComponent = <Package size={16} weight="fill" />
      break
    case 'Coffee':
      iconComponent = <Coffee size={16} weight="fill" />
      break
    default:
      iconComponent = null
      break
  }

  return (
    <Container>
      <ContainerIcon type={type} color={color}>
        {iconComponent}
      </ContainerIcon>
      <p>{text}</p>
    </Container>
  )
}
