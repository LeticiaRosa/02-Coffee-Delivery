import { TextProps, TextSize } from './styles'

export interface LabelProps extends TextProps {
  text: string
  color: 'baseLabel' | 'baseText' | 'baseSubtitle' | 'brandPurple'
  weight?: 'bold' | 'normal'
}

export function Label({ text, size, fonts, color, weight }: LabelProps) {
  return (
    <TextSize size={size} fonts={fonts} color={color} weight={weight}>
      {text}
    </TextSize>
  )
}
