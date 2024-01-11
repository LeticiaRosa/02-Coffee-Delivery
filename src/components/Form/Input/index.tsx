import { InputHTMLAttributes } from 'react'
import { Container } from './styles'

type InputProps = {
  optional?: string
} & InputHTMLAttributes<HTMLInputElement>

export function Input({ optional, ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest} />
      <span>{optional}</span>
    </Container>
  )
}
