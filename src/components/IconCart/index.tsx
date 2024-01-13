import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { StyleSheetManager } from 'styled-components'

export type ColorProps = {
  color: 'Orange' | 'Purple'
  radios: number
}

export function IconCart({ color, radios }: ColorProps) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <HeaderContainer color={color} radios={radios}>
        <div>
          <ShoppingCart size={22} weight="fill" />
        </div>
      </HeaderContainer>
    </StyleSheetManager>
  )
}
