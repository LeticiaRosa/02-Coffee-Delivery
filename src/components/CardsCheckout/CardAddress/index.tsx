import { MapPinLine } from 'phosphor-react'
import { Input } from '../../Form/Input'
import { Label } from '../../Label/index'
import { ContainerAdress, ContainerInputs, HeaderForm } from './styles'
import { useFormContext } from 'react-hook-form'
import { Inputs } from '../../../pages/Checkout'

export function CardAddress() {
  const { register, formState } = useFormContext<Inputs>()
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
        <div>
          <Input
            type="text"
            id="CEP"
            min={11}
            placeholder="CEP"
            {...register('CEP')}
            isError={!!formState.errors.CEP}
          />
          <h6>{formState.errors.CEP?.message}</h6>
        </div>
        {/* <div>
          <Input
            type="text"
            id="road"
            placeholder="Rua"
            {...register('road')}
            isError={!!formState.errors.road}
          />
          <h6>{formState.errors.road?.message}</h6>
        </div>
        <div>
          <Input
            type="number"
            id="number"
            placeholder="Número"
            {...register('number')}
            isError={!!formState.errors.number}
          />
          <h6>{formState.errors.number?.message}</h6>
        </div>
        <div>
          <Input
            type="text"
            id="complement"
            placeholder="Complemento"
            optional="Opcional"
            {...register('complement')}
            isError={!!formState.errors.complement}
          />
          <h6>{formState.errors.complement?.message}</h6>
        </div>
        <div>
          <Input
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            {...register('neighborhood')}
            isError={!!formState.errors.neighborhood}
          />
          <h6>{formState.errors.neighborhood?.message}</h6>
        </div>
        <div>
          <Input
            type="text"
            id="city"
            placeholder="Cidade"
            {...register('city')}
            isError={!!formState.errors.city}
          />
          <h6>{formState.errors.city?.message}</h6>
        </div>
        <div>
          <Input
            type="text"
            id="UF"
            placeholder="UF"
            {...register('UF')}
            isError={!!formState.errors.UF}
          />

          <h6>{formState.errors.UF?.message}</h6>
        </div> */}
      </ContainerInputs>
    </ContainerAdress>
  )
}
