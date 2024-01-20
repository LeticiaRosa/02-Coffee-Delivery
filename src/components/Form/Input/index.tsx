import { forwardRef, InputHTMLAttributes } from 'react'
import { Container } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'

type InputProps = {
  name: keyof Inputs
  optional?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef(function Input(props: InputProps) {
  const { register } = useFormContext<Inputs>()
  return (
    <Container>
      <input {...register(props.name)} {...props.rest} ref={ref} />
      <span>{optional}</span>
    </Container>
  )
})
