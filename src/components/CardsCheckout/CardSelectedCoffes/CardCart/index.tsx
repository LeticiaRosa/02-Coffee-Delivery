import { ContainerInfos, ContainerMenu, ContainerCoffees } from './styles'
import { Card } from './Card'
import { Label } from '../../../Label'
import { useCart } from '../../../../Context/CartContext'
import { coffees, valueEntrega } from '../../../../apis/apiCoffes'

export function CardCart() {
  const { coffeeListType } = useCart()

  function calculateSubtotal() {
    return coffeeListType.reduce((accumulador, item) => {
      const valor = coffees.find((i) => i.id === item.idCoffeeCart)?.price
      if (valor) {
        return accumulador + valor * item.qtdCoffeCart
      }
      return 0
    }, 0)
  }
  function calculateTotal() {
    return calculateSubtotal() + valueEntrega
  }
  return (
    <ContainerMenu>
      <ContainerCoffees>
        {coffeeListType.map((i) => {
          return (
            <div key={i.idCoffeeCart}>
              <Card id={i.idCoffeeCart} qtd={i.qtdCoffeCart} />
            </div>
          )
        })}
      </ContainerCoffees>

      <ContainerInfos>
        <div>
          <Label
            text="Total de Itens"
            fonts="regular"
            size="text-regular-s"
            color="baseText"
          />
          <Label
            text={
              'R$ ' +
              (calculateSubtotal() / 100)
                .toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .toString()
            }
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
            text={
              'R$ ' +
              (valueEntrega / 100)
                .toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .toString()
            }
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
            text={
              'R$ ' +
              (calculateTotal() / 100)
                .toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
                .toString()
            }
            fonts="regular"
            size="text-bold-l"
            weight="bold"
            color="baseSubtitle"
          />
        </div>
      </ContainerInfos>
    </ContainerMenu>
  )
}
