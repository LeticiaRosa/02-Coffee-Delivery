import { IconCart } from '../IconCart'
import { Label } from '../Label'
import { Title } from '../Title'
import { BackgroundCard, Buy, ContainerTag, Price } from './styles'
import { TagCoffee } from '../TagCoffee'
import { Counter } from '../../components/Counter/index'

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
          <Title
            size="title-title-m"
            fonts="title"
            text={(price / 100).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          />
        </Price>
        <Counter qtd={quantity} />

        <IconCart color="Purple" radios={6} />
      </Buy>
    </BackgroundCard>
  )
}
