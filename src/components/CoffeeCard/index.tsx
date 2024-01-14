import { IconCart } from '../IconCart'
import { Label } from '../Label'
import { Title } from '../Title'
import { BackgroundCard, Buy, ContainerTag, Price } from './styles'
import { TagCoffee } from '../TagCoffee'
import { Counter } from '../../components/Counter/index'
import { useState } from 'react'
import { useCart } from '../../Context/CartContext'

interface CoffeeProps {
  id: string
  tag: string[]
  img: string
  text: string
  info: string
  price: number
}

export function CoffeeCard({ id, tag, img, text, info, price }: CoffeeProps) {
  const { addToCart } = useCart()
  const [qtdCoffees, setQtdCoffees] = useState(1)
  const [resetCounter, setResetCounter] = useState(false)

  function handleAddCart() {
    setResetCounter(true)
    setQtdCoffees(1)
    addToCart({
      idCoffeeCart: id,
      qtdCoffeCart: qtdCoffees,
    })
  }
  return (
    <BackgroundCard>
      <img src={img} alt="" />
      <ContainerTag>
        {tag.map((elemento, index) => {
          return (
            <div key={index}>
              <TagCoffee tag={elemento} />
            </div>
          )
        })}
      </ContainerTag>

      <Title text={text} size="title-title-s" fonts="title" />

      <Label
        text={info}
        size="text-regular-s"
        fonts="regular"
        color="baseLabel"
      />
      <Buy>
        <Price>
          <Label
            color="baseText"
            fonts="regular"
            size="text-regular-m"
            text="R$"
          />
          <Title
            size="title-title-m"
            fonts="title"
            text={(price / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </Price>
        <Counter
          qtdInicial={qtdCoffees}
          setQtdCoffees={setQtdCoffees}
          resetCounter={resetCounter}
          setResetCounter={setResetCounter}
        />
        <IconCart color="Purple" radios={6} onClick={handleAddCart} />
      </Buy>
    </BackgroundCard>
  )
}
