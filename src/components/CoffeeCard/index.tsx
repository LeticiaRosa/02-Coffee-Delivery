import { Minus, Plus } from 'phosphor-react'
import Coffee from '../../assets/Coffee/Coffee.svg'
import { IconCart } from '../IconCart'
import { Label } from '../Label'
import { Title } from '../Title'
import { BackgroundCard, Buy, Counter, Price } from './styles'

export function CoffeeCard() {
  return (
    <BackgroundCard>
      <div>
        <img src={Coffee} alt="" />
      </div>
      <Title text="Expresso Tradicional" size="title-title-s" fonts="title" />

      <Label
        text="O tradicional café feito com água quente e grãos moídos"
        size="text-regular-s"
        fonts="regular"
        color="baseLabel"
      />
      <Buy>
        <Price>
          <Label
            color="baseText"
            fonts="regular"
            size="text-regular-s"
            text="R$"
          />
          <Title size="title-title-m" fonts="title" text="9,90" />
        </Price>

        <Counter>
          <Minus size={14} weight="bold" />
          <Label
            color="baseSubtitle"
            fonts="regular"
            size="text-regular-m"
            text="1"
          />
          <Plus size={14} weight="bold" />
        </Counter>
        <IconCart />
      </Buy>
    </BackgroundCard>
  )
}
