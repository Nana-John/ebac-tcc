import { useParams } from 'react-router-dom'
import { useGetRestaurantByIdQuery } from '../../services/api'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import HeaderPageProduct from '../../components/HeaderPageProduct'

import FoodCartComponent from '../../components/FoodCartComponent'

import Checkout from '../Checkout/Checkout'

const Products = () => {
  const { id } = useParams<{ id: string }>()
  const { data: menu, isLoading } = useGetRestaurantByIdQuery(id!)

  if (isLoading) {
    return <h4>carregando...</h4>
  }

  if (!menu) {
    return <h4>Menu não encontrado</h4>
  }

  return (
    <>
      <HeaderPageProduct />
      <Banner
        bannerFood={{
          id: menu.id,
          titulo: menu.titulo,
          destacado: menu.destacado,
          capa: menu.capa,
          tipo: menu.tipo,
          avaliacao: menu.avaliacao,
          descricao: menu.descricao,
          cardapio: []
        }}
      />
      <FoodCartComponent items={menu.cardapio} />
      <Footer />
      <Checkout />
    </>
  )
}

export default Products
