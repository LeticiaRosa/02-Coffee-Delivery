import {
  ShoppingCart,
  Timer,
  Package,
  Coffee,
  MapPin,
  CurrencyDollar,
} from 'phosphor-react'
import { ContainerIcon } from './sytles'

export interface IconProps {
  type: 'ShoppingCart' | 'Timer' | 'Package' | 'Coffee' | 'Map' | 'Dollar'
  color: 'brandYellowDark' | 'brandYellow' | 'baseText' | 'brandPurple'
}

export function Icon({ type, color }: IconProps) {
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
    case 'Map':
      iconComponent = <MapPin size={16} weight="fill" />
      break
    case 'Dollar':
      iconComponent = <CurrencyDollar size={16} weight="fill" />
      break
    default:
      iconComponent = null
      break
  }

  return (
    <>
      <ContainerIcon type={type} color={color}>
        {iconComponent}
      </ContainerIcon>
    </>
  )
}
