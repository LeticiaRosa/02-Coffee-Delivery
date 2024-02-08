import { Title } from '../../components/Title'
import {
  Container,
  ContainerAddress,
  ContainerButton,
  ContainerCart,
  ContainerMenu,
} from './styles'
import { CardAddress } from '../../components/CardsCheckout/CardAddress'
import { CardCart } from '../../components/CardsCheckout/CardSelectedCoffes/CardCart'
import { CardFormOfPayment } from '../../components/CardsCheckout/CardPaymentForm'
import { useNavigate } from 'react-router-dom'
import { Label } from '../../components/Label'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { AddressOrder, useCart } from '../../Context/CartContext'

const checkoutFormValidationSchema = zod.object({
  CEP: zod
    .string()
    .min(9, 'Informe um CEP válido!')
    .max(9, 'Informe um CEP válido.'),
  road: zod.string().toUpperCase().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().toUpperCase(),
  neighborhood: zod.string().toUpperCase().min(1, 'Informe o bairro'),
  city: zod.string().toUpperCase().min(1, 'Informe a cidade'),
  UF: zod.string().min(2, 'Informe o UF'),
})

export function Checkout() {
  const { completeOrder, addressOrder } = useCart()
  const methods = useForm<AddressOrder>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<AddressOrder> = (data) => {
    completeOrder(data)
    console.log(addressOrder)
    navigate('/Success')
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
              <Title
                text="Cafés selecionados"
                fonts="title"
                size="title-title-s"
              />
              <ContainerCart>
                <CardCart />
                <ContainerButton>
                  <button type="submit" disabled={!methods.formState.isValid}>
                    <Label
                      text="CONFIRMAR PEDIDO"
                      fonts="regular"
                      color="baseWhite"
                      size="components-button-g"
                      weight="bold"
                    />
                  </button>
                </ContainerButton>
              </ContainerCart>
            </ContainerMenu>
          </ContainerAddress>
        </form>
      </FormProvider>
    </Container>
  )
}
