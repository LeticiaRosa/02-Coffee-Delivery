import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button(props: ButtonProps) {
  return <ButtonContainer>Botão da cor: {props.color}</ButtonContainer>
}
