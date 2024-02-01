import { Container } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { coffees } from '../../apis/apiCoffes'

export function CoffeeList() {
  return (
    <Container>
      {coffees.map((props) => {
        return (
          <CoffeeCard
            key={props.id}
            id={props.id}
            tag={props.tags}
            text={props.name}
            info={props.description}
            price={props.price}
            img={props.image}
          />
        )
      })}
    </Container>
  )
}
