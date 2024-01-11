import { MapPinLine } from 'phosphor-react'
import { Input } from '../../components/Form/Input'
import { Label } from '../../components/Label'
import { Title } from '../../components/Title'
import { Container, ContainerForm, ContainerInputs, HeaderForm } from './styles'

export function Checkout() {
  return (
    <Container>
      <Title text="Complete seu pedido" fonts="title" size="title-title-s" />

      <ContainerForm>
        <form action="">
          <HeaderForm>
            <MapPinLine size={32} />
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
          </HeaderForm>

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
      </ContainerForm>
    </Container>
  )
}
