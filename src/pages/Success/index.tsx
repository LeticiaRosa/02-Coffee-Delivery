import { Label } from '../../components/Label'
import { Title } from '../../components/Title'
import { Container } from './styles'

export function Success() {
  return (
    <Container>
      <Title text="Uhu! Pedido confirmado" fonts="title" size="title-title-l" />
      <Label
        fonts="regular"
        size="text-regular-l"
        text="Agora é só aguardar que logo o café chegará até você"
        color="baseSubtitle"
      />
    </Container>
  )
}
