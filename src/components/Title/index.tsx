import { TextProps, TextSize } from './styles'

export interface TitleProps extends TextProps {
  text: string
}

export function Title({ text, size, fonts }: TitleProps) {
  return (
    <TextSize size={size} fonts={fonts}>
      {text}
    </TextSize>
  )
}
