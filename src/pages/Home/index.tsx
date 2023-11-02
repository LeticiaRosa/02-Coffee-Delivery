import Imagem from '../../assets/Imagem.png'
import { ContainerHome, ContainerTextHome } from './styles'
export function Home() {
  return (
    <ContainerHome>
      <ContainerTextHome>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <div>
          <h5>Compra simples e segura</h5>
        </div>
        <div>
          <h5>Entrega rápida e rastreada</h5>
        </div>
        <div>
          <h5>Embalagem mantém o café intacto</h5>
        </div>
        <div>
          <h5>O café chega quentinho até você</h5>
        </div>
      </ContainerTextHome>
      <img src={Imagem} alt="" />
    </ContainerHome>
  )
}
