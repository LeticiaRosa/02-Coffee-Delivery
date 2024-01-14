import { ContainerButton, ContainerInfos, ContainerMenu } from './styles'
import { Card } from './Card'
import { Label } from '../../../Label'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../../../Context/CartContext'

export function CardCart() {
  const { coffeeListType } = useCart()
  return (
    <ContainerMenu>
      {coffeeListType.map((i) => {
        return (
          <div key={i.idCoffeeCart}>
            <Card id={i.idCoffeeCart} qtd={i.qtdCoffeCart} />
          </div>
        )
      })}

      <ContainerInfos>
        <div>
          <Label
            text="Total de Itens"
            fonts="regular"
            size="text-regular-s"
            color="baseText"
          />
          <Label
            text="R$ 29,70"
            fonts="regular"
            size="text-regular-m"
            color="baseText"
          />
        </div>
        <div>
          <Label
            text="Entrega"
            fonts="regular"
            size="text-regular-s"
            color="baseText"
          />
          <Label
            text="R$ 3,50"
            fonts="regular"
            size="text-regular-m"
            color="baseText"
          />
        </div>
        <div>
          <Label
            text="Total"
            fonts="regular"
            size="text-bold-l"
            weight="bold"
            color="baseSubtitle"
          />

          <Label
            text="R$ 33,20"
            fonts="regular"
            size="text-bold-l"
            weight="bold"
            color="baseSubtitle"
          />
        </div>
      </ContainerInfos>
      <ContainerButton>
        <NavLink to="/Success" title="Success">
          <button>
            <Label
              text="CONFIRMAR PEDIDO"
              fonts="regular"
              color="baseWhite"
              size="components-button-g"
              weight="bold"
            />
          </button>
        </NavLink>
      </ContainerButton>
    </ContainerMenu>
  )
}
