import { Title } from '../../components/Title'
import {
  Container,
  ContainerAddress,
  ContainerCart,
  ContainerPayment,
  ContainerMenu,
} from './styles'
import { CardAddress } from '../../components/CardAddress'
import { CardCart } from '../../components/CardSelectedCoffes/CardCart'

export function Checkout() {
  return (
    <Container>
      <ContainerAddress>
        <ContainerMenu>
          <div>
            <Title
              text="Complete seu pedido"
              fonts="title"
              size="title-title-s"
            />
            <CardAddress />
          </div>
          <div>
            <ContainerPayment>
              <p>teste</p>
            </ContainerPayment>
          </div>
        </ContainerMenu>

        <ContainerMenu>
          <Title text="Cafés selecionados" fonts="title" size="title-title-s" />
          <ContainerCart>
            <CardCart />
          </ContainerCart>
        </ContainerMenu>
      </ContainerAddress>
    </Container>
  )
}
