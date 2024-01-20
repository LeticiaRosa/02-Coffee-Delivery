import { MapPinLine } from 'phosphor-react'
import { Input } from '../../Form/Input'
import { Label } from '../../Label/index'
import { ContainerAdress, ContainerInputs, HeaderForm } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'

export function CardAddress() {
  const { register } = useFormContext<Inputs>()

  return (
    <ContainerAdress>
      <HeaderForm>
        <MapPinLine size={22} />
        <div>
          <Label
            text="Endereço de Entrega"
            size="text-regular-m"
            fonts="regular"
            color="baseText"
          />
          <Label
            text="Informe o endereço onde deseja receber seu pedido"
            size="text-regular-s"
            fonts="regular"
            color="baseText"
          />
        </div>
      </HeaderForm>
      <ContainerInputs>
        <Input type="text" id="CEP" placeholder="CEP" {...register('CEP')} />
        <Input type="text" id="road" placeholder="Rua" {...register('road')} />
        <Input
          type="number"
          id="number"
          placeholder="Número"
          {...register('number')}
        />
        <Input
          type="text"
          id="complement"
          placeholder="Complemento"
          optional="Opcional"
          {...register('complement')}
        />
        <Input
          type="text"
          id="neighborhood"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <Input
          type="text"
          id="city"
          placeholder="Cidade"
          {...register('city')}
        />
        <Input type="text" id="UF" placeholder="UF" {...register('UF')} />
      </ContainerInputs>
    </ContainerAdress>
  )
}
