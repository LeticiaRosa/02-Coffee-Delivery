import { CurrencyDollarSimple } from 'phosphor-react'
import { Label } from '../../Label/index'
import { Container, ContainerFormOfPayment, Header } from './styles'
import { ButtonFormOfPayment } from './ButtonFormOfPayment'

export function CardFormOfPayment() {
  return (
    <Container>
      <Header>
        <CurrencyDollarSimple size={22} />
        <div>
          <Label
            text="Pagamento"
            size="text-regular-m"
            fonts="regular"
            color="baseText"
          />
          <Label
            text="O pagamento é feito na entrega. Escolha a forma que deseja
              pagar"
            size="text-regular-s"
            fonts="regular"
            color="baseText"
          />
        </div>
      </Header>
      <ContainerFormOfPayment>
        <ButtonFormOfPayment form="CARTÃO DE CRÉDITO" type="Credit" />
        <ButtonFormOfPayment form="CARTÃO DE DÉBITO" type="Debit" />
        <ButtonFormOfPayment form="DINHEIRO" type="Money" />
      </ContainerFormOfPayment>
    </Container>
  )
}
