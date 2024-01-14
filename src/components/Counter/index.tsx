import { Minus, Plus } from 'phosphor-react'
import { Label } from '../Label'
import { ContainerCounter } from './styles'
import { useState } from 'react'

interface CounterProps {
  qtdInicial: number
  setQtdCoffees: (id: number) => void
  resetCounter: boolean
  setResetCounter: (id: boolean) => void
}

export function Counter({
  qtdInicial,
  setQtdCoffees,
  resetCounter,
  setResetCounter,
}: CounterProps) {
  const [qtd, setQtd] = useState(qtdInicial)

  function handleAddQtd() {
    const newQtd = qtd + 1
    updateState(newQtd)
  }
  function handleMinQtd() {
    const newQtd = qtd <= 1 ? 1 : qtd - 1
    updateState(newQtd)
  }

  function updateState(newQtd: number) {
    setQtd(newQtd)
    setQtdCoffees(newQtd)
    setResetCounter(false)
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
