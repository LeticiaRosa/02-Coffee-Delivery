/* eslint-disable prettier/prettier */
import { StyleSheetManager } from 'styled-components'
import { TextProps, TextSize } from './styles'

export interface LabelProps extends TextProps {
  text: string | undefined
  color:
  | 'baseWhite'
  | 'baseLabel'
  | 'baseText'
  | 'baseSubtitle'
  | 'brandPurple'
  | 'red'
  weight?: 'bold' | 'normal'
}

export function Label({ text, size, fonts, color, weight }: LabelProps) {
  return (
    <StyleSheetManager shouldForwardProp={() => true
    }>
      <TextSize size={size} fonts={fonts} color={color} weight={weight}>
        {text}
      </TextSize>
    </StyleSheetManager >
  )
}
