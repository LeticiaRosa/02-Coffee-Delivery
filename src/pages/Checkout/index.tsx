import { Title } from '../../components/Title'
import {
  Container,
  ContainerAddress,
  ContainerCart,
  ContainerMenu,
} from './styles'
import { CardAddress } from '../../components/CardsCheckout/CardAddress'
import { CardCart } from '../../components/CardsCheckout/CardSelectedCoffes/CardCart'
import { CardFormOfPayment } from '../../components/CardsCheckout/CardPaymentForm'

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
            <CardFormOfPayment />
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
