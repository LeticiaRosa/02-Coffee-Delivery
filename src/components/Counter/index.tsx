import { Minus, Plus } from 'phosphor-react'
import { Label } from '../Label'
import { ContainerCounter } from './styles'

interface CounterProps {
  qtdCoffees: number
  setQtdCoffees: (qtd: number) => void
}

export function Counter({ qtdCoffees, setQtdCoffees }: CounterProps) {
  function handleAddQtd() {
    setQtdCoffees(++qtdCoffees)
  }
  function handleMinQtd() {
    if (qtdCoffees <= 1) return
    setQtdCoffees(--qtdCoffees)
  }

  return (
    <ContainerCounter>
      <Minus size={16} weight="bold" onClick={handleMinQtd} />
      <Label
        color="baseSubtitle"
        fonts="regular"
        weight="bold"
        size="text-regular-m"
        text={qtdCoffees.toString()}
      />
      <Plus size={16} weight="bold" onClick={handleAddQtd} />
    </ContainerCounter>
  )
}
