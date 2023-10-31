// arquivo de definição de tipos
// nesse arquivo estamos sobrescrevendo a tipagem do styled componentes

import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
