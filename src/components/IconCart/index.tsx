import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

export type ColorProps = {
  color: 'Orange' | 'Purple'
  radios: number
}

export function IconCart({ color, radios }: ColorProps) {
  return (
    <HeaderContainer color={color} radios={radios}>
      <NavLink to="/Checkout" title="Carrinho">
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </HeaderContainer>
  )
}
