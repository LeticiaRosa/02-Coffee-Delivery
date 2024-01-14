import { ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'
import { StyleSheetManager } from 'styled-components'
import { HTMLAttributes } from 'react'

export type ColorProps = {
  color: 'Orange' | 'Purple'
  radios: number
} & HTMLAttributes<HTMLDivElement>

export function IconCart({ color, radios, ...rest }: ColorProps) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <HeaderContainer color={color} radios={radios}>
        <div {...rest}>
          <ShoppingCart size={22} weight="fill" />
        </div>
      </HeaderContainer>
    </StyleSheetManager>
  )
}
