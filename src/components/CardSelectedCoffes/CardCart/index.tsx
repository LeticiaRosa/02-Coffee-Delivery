import { ContainerButton, ContainerInfos, ContainerMenu } from './styles'

import { Card } from '../../../components/CardSelectedCoffes/CardCart/Card'

import { Label } from '../../Label'

export function CardCart() {
  return (
    <ContainerMenu>
      <Card />
      <Card />
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
        <button>
          <Label
            text="CONFIRMAR PEDIDO"
            fonts="regular"
            color="baseWhite"
            size="components-button-g"
            weight="bold"
          />
        </button>
      </ContainerButton>
    </ContainerMenu>
  )
}
