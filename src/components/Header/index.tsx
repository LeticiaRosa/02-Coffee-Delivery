import { HeaderContainer, Local, Menu } from './styles'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { IconCart } from '../IconCart'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <Menu>
        <Local>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </Local>

        <NavLink to="/Checkout" title="Carrinho">
          <IconCart color="Orange" radios={6} />
        </NavLink>
      </Menu>
    </HeaderContainer>
  )
}
