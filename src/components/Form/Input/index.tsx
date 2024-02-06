import { InputHTMLAttributes, useEffect } from 'react'
import { Container } from './styles'
import { useFormContext } from 'react-hook-form'

import { apiViaCep } from '../../../apis/apiViaCep'
import { AddressOrder } from '../../../Context/CartContext'

type InputProps = {
  name: keyof AddressOrder
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
  } = useFormContext<AddressOrder>()

  async function ValidatedCEP(cep: string) {
    if (!cep) return

    if (cep.replace('-', '').length > 9) {
      setError('CEP', {
        type: 'maxLength',
        message: 'Informe um CEP com 8 digitos',
      })
      return
    }
    if (cep.replace('-', '').length === 8) {
      const response = await apiViaCep(cep.replace('-', ''))
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
    }
    setValue('CEP', cep.replace(/(\d{5})(\d{3})/, '$1-$2'))
  }

  function disabledInputs(name: string): boolean {
    return (
      name === 'city' ||
      name === 'UF' ||
      (name !== 'CEP' && !!formState.errors.CEP)
    )
  }

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => await ValidatedCEP(getValues('CEP')))()
  }, [watch('CEP')])
  return (
    <Container $error={isError}>
      <input
        disabled={disabledInputs(name)}
        {...register(name)}
        {...rest}
        maxLength={maxCaracters}
      />
      <span>{optional}</span>
      <h6>{formState.errors[name]?.message}</h6>
    </Container>
  )
}
