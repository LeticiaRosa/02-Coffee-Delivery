import { Bank, CreditCard, Money } from 'phosphor-react'
import { Label } from '../../../Label'
import { ContainerButton } from './styles'
import { useCart } from '../../../../Context/CartContext'

type PropsButtonFormOfPayment = {
  form: string
  type: 'Credit' | 'Debit' | 'Money'
}

export function ButtonFormOfPayment({ form, type }: PropsButtonFormOfPayment) {
  const { updatedMethodPayment, methodPayment } = useCart()
  let iconComponent
  switch (type) {
    case 'Credit':
      iconComponent = <CreditCard size={16} />
      break
    case 'Debit':
      iconComponent = <Bank size={16} />
      break
    case 'Money':
      iconComponent = <Money size={16} />
      break
    default:
      iconComponent = null
      break
  }
  function handleSetTypeOfPayment(form: string) {
    updatedMethodPayment(form)
  }
  return (
    <ContainerButton method={methodPayment}>
      <button
        name={type}
        id={type} // ajustar
        type="button"
        onClick={() => handleSetTypeOfPayment(type)}
      >
        {iconComponent}
        <Label
          text={form}
          fonts="regular"
          color="baseText"
          size="components-button-s"
        />
      </button>
    </ContainerButton>
  )
}
