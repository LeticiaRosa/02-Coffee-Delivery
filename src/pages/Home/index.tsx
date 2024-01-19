import Imagem from '../../assets/Imagem.png'
import {
  Container,
  ContainerElements,
  ContainerHome,
  ContainerIntro,
} from './styles'
import { ItemInfo } from '../../components/ItemInfo'
import { Title } from '../../components/Title'
import { CoffeeList } from '../../components/CoffeeList'
import { ToastContainer } from 'react-toastify'

export function Home() {
  return (
    <Container>
      <ContainerHome>
        <ToastContainer />
        <ContainerIntro>
          <Title
            text="Encontre o café perfeito para qualquer hora do dia"
            size="title-title-xl"
            fonts="title"
          />
          <Title
            text="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora"
            size="title-title-m"
            fonts="regular"
          />

          <ContainerElements>
            <ItemInfo
              text="Compra simples e segura"
              type="ShoppingCart"
              color="brandYellowDark"
            />
            <ItemInfo
              text="Entrega rápida e rastreada"
              type="Timer"
              color="brandYellow"
            />
            <ItemInfo
              text="Embalagem mantém o café intacto"
              type="Package"
              color="baseText"
            />
            <ItemInfo
              text="O café chega quentinho até você"
              type="Coffee"
              color="brandPurple"
            />
          </ContainerElements>
        </ContainerIntro>
        <img src={Imagem} alt="" />
      </ContainerHome>
      <Title text="Nossos cafés" size="title-title-l" fonts="title" />
      <CoffeeList />
    </Container>
  )
}
