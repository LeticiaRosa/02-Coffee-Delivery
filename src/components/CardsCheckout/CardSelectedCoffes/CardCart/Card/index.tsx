import { Label } from '../../../../Label'
import { BackgroundCard, Buy, ContainerButtons, Price } from './styles'
import { Counter } from '../../../../Counter'
import { RemoveButton } from '../../../../RemoveButton'
import { useState } from 'react'
import { coffees } from '../../../../../api'
import { useCart } from '../../../../../Context/CartContext'
// import { useCart } from '../../../../../Context/CartContext'
// import { useCart } from '../../../../../Context/CartContext'

interface CardProps {
  id: string
  qtd: number
}

export function Card({ id, qtd }: CardProps) {
  const [qtdCoffees, setQtdCoffees] = useState(qtd)
  const { updatedToCart, removeToCart } = useCart()
  function handleAddToCard(qtd: number) {
    setQtdCoffees(qtd)
    updatedToCart({ idCoffeeCart: id, qtdCoffeCart: qtd })
  }

  function handleRemoveToCard() {
    removeToCart(id)
  }

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
          <Counter qtdCoffees={qtdCoffees} setQtdCoffees={handleAddToCard} />
          <RemoveButton onClick={handleRemoveToCard} />
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
