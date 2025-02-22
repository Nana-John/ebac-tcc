import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import FoodList from '../../components/FoodList'
import Footer from '../../components/Footer'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  // Chamada do hook para buscar os restaurantes
  const { data: FoodItems, isLoading, isError } = useGetRestaurantsQuery()

  // Caso esteja carregando
  if (isLoading) {
    return <h4>Carregando...</h4>
  }

  // Caso haja erro na requisição
  if (isError) {
    return <h4>Ocorreu um erro ao carregar os dados.</h4>
  }

  // Caso a requisição tenha retornado os dados corretamente
  if (FoodItems && FoodItems.length > 0) {
    return (
      <>
        <HeaderComponent />
        <FoodList foodArray={FoodItems} />
        <Footer />
      </>
    )
  }

  // Caso não haja dados
  return <h4>Nenhum item encontrado.</h4>
}

export default Home
