import { TextProps, TextSize } from './styles'

export interface LabelProps extends TextProps {
  text: string
  color: 'baseLabel' | 'baseText' | 'baseSubtitle' | 'brandPurple'
}

export function Label({ text, size, fonts, color }: LabelProps) {
  return (
    <TextSize size={size} fonts={fonts} color={color}>
      {text}
    </TextSize>
  )
}
