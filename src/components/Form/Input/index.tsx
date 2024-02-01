import { forwardRef, InputHTMLAttributes, Ref } from 'react'
import { Container } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'
import { StyleSheetManager } from 'styled-components'

type InputProps = {
  name: keyof Inputs
  optional?: string
  isError?: boolean
} & InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef(function Input(
  { optional, name, isError = false, ...rest }: InputProps,
  ref: Ref<HTMLInputElement>,
) {
  const { register } = useFormContext<Inputs>()
  console.log(typeof isError)

  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      <Container $error={true}>
        <input {...register(name)} {...rest} ref={ref} />
        <span>{optional}</span>
      </Container>
    </StyleSheetManager>
  )
})
