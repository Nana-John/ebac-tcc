import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Componentes
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LocalizacaoContato from './components/LocalizacaoContato'
import SobreNos from './components/SobreNos'
import Destaques from './components/Destaques'
import Footer from './components/Footer'
import MenuSection from './components/Menu'
import Modal from './components/Modal/modal'

// API
import { useGetRestaurantsQuery } from './services/api'

// Define the Dish interface
interface Dish {
  id: number
  name: string
  image: string
  descricao?: string // Optional description
  preco?: number // Optional price
}

const App: React.FC = () => {
  const { isLoading, error } = useGetRestaurantsQuery()
  const [selectedProduct, setSelectedProduct] = useState<Dish | null>(null)

  return (
    <Router>
      <Header />
      <HeroSection />

      {/* Seção de Menu carregando dinamicamente os restaurantes */}
      {isLoading ? (
        <p>Carregando restaurantes...</p>
      ) : error ? (
        <p>Erro ao carregar os restaurantes.</p>
      ) : (
        <MenuSection />
      )}

      <SobreNos />
      <Destaques />
      <LocalizacaoContato />
      <Footer />

      {/* Modal para exibir detalhes do produto */}
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Router>
  )
}

export default App
