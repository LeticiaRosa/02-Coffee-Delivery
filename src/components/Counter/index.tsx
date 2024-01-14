import { Minus, Plus } from 'phosphor-react'
import { Label } from '../Label'
import { ContainerCounter } from './styles'
import { useState } from 'react'

interface CounterProps {
  setQtdCoffees: (id: number) => void
  resetCounter: boolean
}

export function Counter({ setQtdCoffees, resetCounter }: CounterProps) {
  const [qtd, setQtd] = useState(1)

  function handleAddQtd() {
    const newQtd = qtd + 1
    setQtd(newQtd)
    setQtdCoffees(newQtd)
  }
  function handleMinQtd() {
    const newQtd = qtd <= 1 ? 1 : qtd - 1
    setQtd(newQtd)
    setQtdCoffees(newQtd)
  }

  return (
    <ContainerCounter>
      <Minus size={16} weight="bold" onClick={handleMinQtd} />
      <Label
        color="baseSubtitle"
        fonts="regular"
        weight="bold"
        size="text-regular-m"
        text={resetCounter ? '1' : qtd.toString()}
      />
      <Plus size={16} weight="bold" onClick={handleAddQtd} />
    </ContainerCounter>
  )
}
