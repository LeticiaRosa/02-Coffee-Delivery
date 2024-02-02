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
      <ContainerInputs>
        <div>
          <Input
            type="text"
            id="CEP"
            placeholder="CEP"
            name="CEP"
            maxCaracters={9}
          />
        </div>
        <div>
          <Input type="text" id="road" placeholder="Rua" name="road" />
        </div>
        <div>
          <Input type="number" id="number" placeholder="Número" name="number" />
        </div>
        <div>
          <Input
            type="text"
            id="complement"
            placeholder="Complemento"
            optional="Opcional"
            name="complement"
          />
        </div>
        <div>
          <Input
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            name="neighborhood"
          />
        </div>
        <div>
          <Input type="text" id="city" placeholder="Cidade" name="city" />
        </div>
        <div>
          <Input
            type="text"
            id="UF"
            placeholder="UF"
            name="UF"
            maxCaracters={2}
          />
        </div>
      </ContainerInputs>
    </ContainerAdress>
  )
}
