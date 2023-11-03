import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Imagem from '../../assets/Imagem.png'
import {
  ContainerElements,
  ContainerHome,
  ContainerIcon,
  ContainerTextHome,
} from './styles'
export function Home() {
  return (
    <ContainerHome>
      <ContainerTextHome>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <ContainerElements>
          <div>
            <ContainerIcon>
              <ShoppingCart size={16} weight="fill" />
            </ContainerIcon>

            <h5>Compra simples e segura</h5>
          </div>
          <div>
            <ContainerIcon>
              <Timer size={16} weight="fill" />
            </ContainerIcon>
            <h5>Entrega rápida e rastreada</h5>
          </div>
          <div>
            <ContainerIcon>
              <Package size={16} weight="fill" />
            </ContainerIcon>
            <h5>Embalagem mantém o café intacto</h5>
          </div>
          <div>
            <ContainerIcon>
              <Coffee size={16} weight="fill" />
            </ContainerIcon>
            <h5>O café chega quentinho até você</h5>
          </div>
        </ContainerElements>
      </ContainerTextHome>
      <img src={Imagem} alt="" />
    </ContainerHome>
  )
}
