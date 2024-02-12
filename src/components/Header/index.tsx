import { HeaderContainer, Local, Menu } from './styles'
import Logo from '../../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { MapPin } from 'phosphor-react'
import { IconCart } from '../IconCart'
import { useState } from 'react'
import { apiLocation } from '../../apis/apiNominatim'

export function Header() {
  const [cityName, setCityName] = useState('Brasil')

  function getLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const response = await apiLocation(latitude, longitude)
        const city = response.address.city + ' - ' + response.address.state
        setCityName(city)
      })
    } else {
      console.log('Geolocalização não está disponível.')
    }
  }
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <Menu>
        <button id="obterLocalizacao" onClick={() => getLocation()}>
          Obter Localização
        </button>

        <Local>
          <MapPin size={22} weight="fill" />
          <p>{cityName}</p>
        </Local>

        <NavLink to="/Checkout" title="Carrinho">
          <IconCart color="Orange" radios={6} />
        </NavLink>
      </Menu>
    </HeaderContainer>
  )
}
