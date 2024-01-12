import { Label } from '../../../Label'
import { BackgroundCard, Buy, Price } from './styles'
import expressoTradicional from '../../../../assets/Coffees/expresso-tradicional.png'
import { Counter } from '../../../Counter'

export function Card() {
  return (
    <BackgroundCard>
      <img src={expressoTradicional} alt="" />
      <Buy>
        <Label
          color="baseText"
          fonts="regular"
          size="text-regular-m"
          text="Expresso Tradicional"
        />
        <Counter qtd={1} />
      </Buy>
      <Price>
        <Label color="baseText" fonts="regular" size="text-bold-m" text="R$" />
        <Label
          color="baseText"
          fonts="regular"
          size="text-bold-m"
          text={(990 / 100).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        />
      </Price>
    </BackgroundCard>
  )
}
