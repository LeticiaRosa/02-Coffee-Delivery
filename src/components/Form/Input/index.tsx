import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { Container } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'

type InputProps = {
  name: keyof Inputs
  optional?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef(function Input(
  { optional, name, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const { register } = useFormContext<Inputs>()
  return (
    <Container>
      <input {...register(name)} {...rest} ref={ref} />
      <span>{optional}</span>
    </Container>
  )
})
