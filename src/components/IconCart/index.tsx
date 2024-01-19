import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer, QtdItens } from './styles'
import { StyleSheetManager } from 'styled-components'
import { HTMLAttributes } from 'react'
import { useCart } from '../../Context/CartContext'

export type ColorProps = {
  color: 'Orange' | 'Purple'
  radios: number
} & HTMLAttributes<HTMLDivElement>

export function IconCart({ color, radios, ...rest }: ColorProps) {
  const { coffeeListType } = useCart()
  function qtdCoffees() {
    return coffeeListType.reduce(
      (acumulador, item) => acumulador + item.qtdCoffeCart,
      0,
    )
  }
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <HeaderContainer color={color} radios={radios} {...rest}>
        <ShoppingCart size={22} weight="fill" />
        {color === 'Orange' && coffeeListType.length > 0 ? (
          <QtdItens>
            <p>{qtdCoffees()}</p>
          </QtdItens>
        ) : (
          <></>
        )}
      </HeaderContainer>
    </StyleSheetManager>
  )
}
