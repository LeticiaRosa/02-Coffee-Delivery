import { MapPinLine } from 'phosphor-react'
import { Input } from '../../Form/Input'
import { Label } from '../../Label/index'
import { ContainerAdress, ContainerInputs, HeaderForm } from './styles'

export function CardAddress() {
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
      <form action="">
        <ContainerInputs>
          <Input placeholder="CEP" />
          <Input placeholder="Rua" optional="Opcional" />
          <Input placeholder="Número" />
          <Input placeholder="Complemento" />
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
        </ContainerInputs>
      </form>
    </ContainerAdress>
  )
}
