import { StyleSheetManager } from 'styled-components'
import { TextProps, TextSize } from './styles'

export interface TitleProps extends TextProps {
  text: string
}

export function Title({ text, size, fonts }: TitleProps) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <TextSize size={size} fonts={fonts}>
        {text}
      </TextSize>
    </StyleSheetManager>
  )
}
