// Defina o tipo FoodInfos de forma única, pode ser em um arquivo de tipos

interface FoodInfos {
  id: string
  titulo: string
  destacado: boolean
  cardapio: string[]
  capa: string
  tipo: string
  avaliacao: number
  descricao: string
}

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
    // Mapeando os dados de Restaurant para FoodInfos
    const foodInfos: FoodInfos[] = FoodItems.map((restaurant) => ({
      id: restaurant.id, // Atribuindo corretamente o id
      titulo: restaurant.name, // Usando o campo 'name' para o título
      destacado: restaurant.destacado || false, // Atribuindo valor default se não existir
      cardapio: restaurant.cardapio || [], // Usando cardapio se disponível
      capa: restaurant.capa, // Atribuindo a capa
      tipo: restaurant.tipo, // Atribuindo o tipo
      avaliacao: restaurant.avaliacao, // Atribuindo avaliação
      descricao: restaurant.descricao // Atribuindo descrição
    }))
    interface FoodListProps {
      foodArray: FoodInfos[] // Aqui você define que foodArray será um array do tipo FoodInfos
    }

    const FoodList: React.FC<FoodListProps> = ({ foodArray }) => {
      return (
        <div>
          {foodArray.map((item) => (
            <div key={item.id}>
              <h2>{item.titulo}</h2>
              <p>{item.descricao}</p>
              {/* Renderizar outros dados do item conforme necessário */}
            </div>
          ))}
        </div>
      )
    }

    return (
      <>
        <HeaderComponent />
        <FoodList foodArray={foodInfos} />
        <Footer />
      </>
    )
  }

  // Caso não haja dados
  return <h4>Nenhum item encontrado.</h4>
}

export default Home
