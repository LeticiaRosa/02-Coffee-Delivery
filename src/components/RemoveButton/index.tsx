import { Trash } from 'phosphor-react'
import { Label } from '../Label'
import { ContainerRemoveButton } from './styles'

export function RemoveButton({ ...rest }) {
  return (
    <ContainerRemoveButton {...rest}>
      <Trash size={16} weight="bold" />
      <Label
        color="baseSubtitle"
        fonts="regular"
        size="components-button-s"
        text="REMOVER"
      />
    </ContainerRemoveButton>
  )
}
