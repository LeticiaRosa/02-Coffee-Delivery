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

  function ValidatedCEP(cep: string) {
    if (!cep) return

    if (cep.replace('-', '').length > 9) {
      setError('CEP', {
        type: 'maxLength',
        message: 'Informe um CEP com 8 digitos',
      })
      return
    }
    if (cep.replace('-', '').length === 8) {
      apiViaCep(cep.replace('-', '')).then((response) => {
        if (response.erro) {
          setValue('road', '')
          setValue('neighborhood', '')
          setValue('city', '')
          setValue('UF', '')
          setError('CEP', {
            message: 'O CEP informado não existe!',
          })
          return
        }
        clearErrors('CEP')
        clearErrors('road')
        clearErrors('neighborhood')
        clearErrors('city')
        clearErrors('UF')
        clearErrors('number')
        setValue('road', response.logradouro)
        setValue('neighborhood', response.bairro)
        setValue('city', response.localidade)
        setValue('UF', response.uf)
      })
    }
    setValue('CEP', cep.replace(/(\d{5})(\d{3})/, '$1-$2'))
  }

  useEffect(() => {
    ValidatedCEP(getValues('CEP'))
  }, [watch('CEP')])
  return (
    <Container $error={isError}>
      <input {...register(name)} {...rest} maxLength={maxCaracters} />
      <span>{optional}</span>
      <h6>{formState.errors[name]?.message}</h6>
    </Container>
  )
}
