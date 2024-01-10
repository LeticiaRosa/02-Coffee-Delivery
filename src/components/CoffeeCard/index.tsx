import { Minus, Plus } from 'phosphor-react'
import { IconCart } from '../IconCart'
import { Label } from '../Label'
import { Title } from '../Title'
import { BackgroundCard, Buy, ContainerTag, Counter, Price } from './styles'
import { TagCoffee } from '../TagCoffee'

interface CoffeeProps {
  tag: string[]
  img: string
  text: string
  info: string
  price: number
  quantity: number
}

export function CoffeeCard({
  tag,
  img,
  text,
  info,
  price,
  quantity,
}: CoffeeProps) {
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
          <Title size="title-title-m" fonts="title" text={price.toString()} />
        </Price>

        <Counter>
          <Minus size={16} weight="bold" />
          <Label
            color="baseSubtitle"
            fonts="regular"
            weight="bold"
            size="text-regular-m"
            text={quantity.toString()}
          />
          <Plus size={16} weight="bold" />
        </Counter>
        <IconCart color="Purple" radios={6} />
      </Buy>
    </BackgroundCard>
  )
}
