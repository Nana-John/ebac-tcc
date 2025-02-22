import { BannerContainer, Content } from './styles'

// Definindo os tipos para FoodInfos
interface CardapioItem {
  nome: string
  foto: string
  porcao: string
}

interface FoodInfos {
  id: string
  titulo: string
  destacado: boolean
  cardapio: CardapioItem[]
  capa: string
  tipo: string
  avaliacao: number
  descricao: string
}

type Props = {
  bannerFood: FoodInfos
}

const Banner = ({ bannerFood }: Props) => {
  return (
    <BannerContainer style={{ backgroundImage: `url(${bannerFood.capa})` }}>
      <Content className="container">
        <span>{bannerFood.tipo}</span>
        <h3>{bannerFood.titulo}</h3>
      </Content>
    </BannerContainer>
  )
}

export default Banner
