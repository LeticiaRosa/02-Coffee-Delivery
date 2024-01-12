import { Minus, Plus } from 'phosphor-react'
import { Label } from '../Label'
import { ContainerCounter } from './styles'

export function Counter({ qtd }: { qtd: number }) {
  return (
    <ContainerCounter>
      <Minus size={16} weight="bold" />
      <Label
        color="baseSubtitle"
        fonts="regular"
        weight="bold"
        size="text-regular-m"
        text={qtd.toString()}
      />
      <Plus size={16} weight="bold" />
    </ContainerCounter>
  )
}
