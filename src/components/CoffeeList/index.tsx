import { Title } from '../Title'
import { Container } from './styles'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {
  return (
    <Container>
      <Title text="Nossos cafés" size="title-title-l" fonts="title" />
      <CoffeeCard />
    </Container>
  )
}
