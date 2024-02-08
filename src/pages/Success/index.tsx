import { useCart } from '../../Context/CartContext'
import { Icon } from '../../components/ItemInfo/Icon/Icon'
import { Label } from '../../components/Label'
import { Title } from '../../components/Title'
import { BorderLine, BorderRadios, Container, ContainerIcon } from './styles'

export function Success() {
  const { addressOrder, methodPayment } = useCart()

  function returnDescriptionMethodPayment() {
    switch (methodPayment) {
      case 'Credit':
        return 'Crédito'
      case 'Debit':
        return 'Débito'
      case 'Money':
        return 'Dinheiro'
      default:
        return ''
    }
  }
  return (
    <Container>
      <Title text="Uhu! Pedido confirmado" fonts="title" size="title-title-l" />
      <Label
        fonts="regular"
        size="text-regular-l"
        text="Agora é só aguardar que logo o café chegará até você"
        color="baseSubtitle"
      />

      <BorderLine>
        <BorderRadios>
          <div>
            <ContainerIcon>
              <Icon type="Map" color="brandPurple" />
              <div>
                <p>
                  Entrega em{' '}
                  <strong>
                    {addressOrder[0].road}, {addressOrder[0].number}
                  </strong>
                </p>
                <p>
                  {addressOrder[0].neighborhood} - {addressOrder[0].city} ,{' '}
                  {addressOrder[0].UF}
                </p>
              </div>
            </ContainerIcon>
            <ContainerIcon>
              <Icon type="Timer" color="brandYellow" />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </ContainerIcon>
            <ContainerIcon>
              <Icon type="Dollar" color="brandYellowDark" />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{returnDescriptionMethodPayment()}</strong>
              </div>
            </ContainerIcon>
          </div>
        </BorderRadios>
      </BorderLine>
    </Container>
  )
}
