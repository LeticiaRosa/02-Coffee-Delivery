import { Label } from '../../../../Label'
import { BackgroundCard, Buy, ContainerButtons, Price } from './styles'
import expressoTradicional from '../../../../../assets/Coffees/expresso-tradicional.png'
import { Counter } from '../../../../Counter'
import { RemoveButton } from '../../../../RemoveButton'
import { useEffect, useState } from 'react'

export function Card() {
  const [qtdCoffees, setQtdCoffees] = useState(1)
  useEffect(() => {
    console.log('Adicionar diretamente no carrinho' || qtdCoffees)
  }, [qtdCoffees])

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
          <Counter setQtdCoffees={setQtdCoffees} resetCounter={false} />
          <RemoveButton />
        </ContainerButtons>
      </Buy>
      <Price>
        <Label color="baseText" fonts="regular" size="text-bold-m" text="R$" />
        <Label
          color="baseText"
          fonts="regular"
          size="text-bold-m"
          text={((990 / 100) * qtdCoffees).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        />
      </Price>
    </BackgroundCard>
  )
}
