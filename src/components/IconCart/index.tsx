import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function IconCart() {
  return (
    <HeaderContainer>
      <NavLink to="/Checkout" title="Carrinho">
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </HeaderContainer>
  )
}
