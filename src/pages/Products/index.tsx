import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'

import Banner from '../../components/Banner/index'
import Footer from '../../components/Footer'
import HeaderPageProduct from '../../components/HeaderPageProduct'
import FoodCartComponent from '../../components/FoodCartComponent'
import Checkout from '../Checkout/Checkout'

// Definindo os tipos
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

const Products = () => {
  const { id } = useParams<{ id: string }>()
  const { data: menu, isLoading } = useGetRestaurantByIdQuery(id!)

  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  if (!menu) {
    return <h4>Menu não encontrado</h4>
  }

  // Certifique-se de que a transformação do menu para FoodInfos esteja correta
  const cardapioItems: CardapioItem[] = menu.cardapio.map((item) => ({
    nome: item, // Ajuste conforme o seu dado real
    foto: '', // Se disponível, adicione a lógica para a foto
    porcao: '' // Se disponível, adicione a lógica para porção
  }))

  const bannerData: FoodInfos = {
    id: menu.id,
    titulo: menu.name, // 'name' é o campo correto para o título
    destacado: menu.destacado || false,
    capa: menu.capa || '',
    tipo: menu.tipo || '',
    avaliacao: menu.avaliacao || 0,
    descricao: menu.descricao || '',
    cardapio: cardapioItems // Aqui está a transformação para o tipo esperado
  }

  const cardapioItems: CardapioItem[] = menu.cardapio.map((item: any) => ({
    id: item.id,
    nome: item.nome,
    foto: item.foto,
    porcao: item.porcao,
    descricao: item.descricao,
    preco: item.preco
  }))

  return (
    <>
      <HeaderPageProduct />
      <Banner bannerFood={bannerData} />
      <FoodCartComponent items={cardapioItems} /> {/* Passando o cardapioItems */}
      <Footer />
      <Checkout />
    </>
  )
}

export default Products
