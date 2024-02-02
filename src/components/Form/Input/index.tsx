import { InputHTMLAttributes, useEffect } from 'react'
import { Container } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'
import { apiViaCep } from '../../../apis/apiViaCep'

type InputProps = {
  name: keyof Inputs
  optional?: string
  isError?: boolean
  minCaracters?: number
  maxCaracters?: number
} & InputHTMLAttributes<HTMLInputElement>

export function Input({
  optional,
  name,
  isError = false,
  maxCaracters,
  ...rest
}: InputProps) {
  const {
    register,
    getValues,
    setValue,
    setError,
    watch,
    formState,
    clearErrors,
  } = useFormContext<Inputs>()

  useEffect(() => {
    if (!getValues('CEP')) return

    if (getValues('CEP').replace('-', '').length > 9) {
      setError('CEP', {
        type: 'maxLength',
        message: 'Informe um CEP com 8 digitos',
      })
      return
    }
    clearErrors('CEP')
    clearErrors('road')
    clearErrors('neighborhood')
    clearErrors('city')
    clearErrors('UF')
    if (getValues('CEP').replace('-', '').length === 8) {
      apiViaCep(getValues('CEP').replace('-', '')).then((response) => {
        setValue('road', response.logradouro)
        setValue('neighborhood', response.bairro)
        setValue('city', response.localidade)
        setValue('UF', response.uf)
      })
    }
    setValue('CEP', getValues('CEP').replace(/(\d{5})(\d{3})/, '$1-$2'))
  }, [watch('CEP')])
  return (
    <Container $error={isError}>
      <input {...register(name)} {...rest} maxLength={maxCaracters} />
      <span>{optional}</span>
      <h6>{formState.errors[name]?.message}</h6>
    </Container>
  )
}
