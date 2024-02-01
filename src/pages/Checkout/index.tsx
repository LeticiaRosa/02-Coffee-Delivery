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
// import { NavLink } from 'react-router-dom'
import { Label } from '../../components/Label'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
export type Inputs = {
  CEP: string
  road: string
  number: number
  complement: string
  neighborhood: string
  city: string
  UF: string
}

const checkoutFormValidationSchema = zod.object({
  CEP: zod
    .string()
    .min(8, 'Informe um CEP válido! ')
    .max(8, 'Informe um CEP válido.'),
  road: zod.string().toUpperCase().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string().toUpperCase(),
  neighborhood: zod.string().toUpperCase().min(1, 'Informe o bairro'),
  city: zod.string().toUpperCase().min(1, 'Informe a cidade'),
  UF: zod.string().min(2, 'Informe o UF').max(2, 'Informe um UF válido'),
})

export function Checkout() {
  const methods = useForm<Inputs>({
    resolver: zodResolver(checkoutFormValidationSchema),
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
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
                  {/* <NavLink to="/Success" title="Success"> */}
                  <button type="submit">
                    <Label
                      text="CONFIRMAR PEDIDO"
                      fonts="regular"
                      color="baseWhite"
                      size="components-button-g"
                      weight="bold"
                    />
                  </button>
                  {/* </NavLink> */}
                </ContainerButton>
              </ContainerCart>
            </ContainerMenu>
          </ContainerAddress>
        </form>
      </FormProvider>
    </Container>
  )
}
