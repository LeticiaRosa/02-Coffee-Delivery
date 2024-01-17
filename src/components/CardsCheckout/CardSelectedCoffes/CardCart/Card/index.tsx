import { Label } from '../../../../Label'
import { BackgroundCard, Buy, ContainerButtons, Price } from './styles'
import { Counter } from '../../../../Counter'
import { RemoveButton } from '../../../../RemoveButton'
import { useState } from 'react'
import { coffees } from '../../../../../api'
// import { useCart } from '../../../../../Context/CartContext'
// import { useCart } from '../../../../../Context/CartContext'

interface CardProps {
  id: string
  qtd: number
}

export function Card({ id, qtd }: CardProps) {
  // const { coffeeListType, addToCart } = useCart()
  const [qtdCoffees, setQtdCoffees] = useState(qtd)
  // const { addToCart } = useCart()
  // useEffect(() => {
  //   addToCart({ idCoffeeCart: id, qtdCoffeCart: qtdCoffees })
  // }, [qtdCoffees])

  function returnCoffee() {
    const found = coffees.find((element) => element.id === id)
    return found
  }
  return (
    <BackgroundCard>
      <img src={returnCoffee()?.image} alt="" />

      <Buy>
        <Label
          color="baseText"
          fonts="regular"
          size="text-regular-m"
          text={returnCoffee()?.name}
        />
        <ContainerButtons>
          <Counter qtdCoffees={qtdCoffees} setQtdCoffees={setQtdCoffees} />
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
