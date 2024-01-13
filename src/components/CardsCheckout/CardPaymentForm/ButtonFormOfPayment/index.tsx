import { Bank, CreditCard, Money } from 'phosphor-react'
import { Label } from '../../../Label'
import { ContainerButton } from './styles'

type PropsButtonFormOfPayment = {
  form: string
  type: 'Credit' | 'Debit' | 'Money'
}

export function ButtonFormOfPayment({ form, type }: PropsButtonFormOfPayment) {
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

  return (
    <ContainerButton>
      <button>
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
