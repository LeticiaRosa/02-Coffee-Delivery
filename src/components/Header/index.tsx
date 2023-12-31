import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <NavLink to="/" title="Home">
          <img src={Logo} alt="" />
        </NavLink>
      </span>
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>
        <NavLink to="/Checkout" title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
