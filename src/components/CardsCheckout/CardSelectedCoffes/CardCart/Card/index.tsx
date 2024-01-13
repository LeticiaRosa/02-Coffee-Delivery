import { Label } from '../../../../Label'
import { BackgroundCard, Buy, ContainerButtons, Price } from './styles'
import expressoTradicional from '../../../../../assets/Coffees/expresso-tradicional.png'
import { Counter } from '../../../../Counter'
import { RemoveButton } from '../../../../RemoveButton'

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
        <ContainerButtons>
          <Counter qtd={1} />
          <RemoveButton />
        </ContainerButtons>
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
