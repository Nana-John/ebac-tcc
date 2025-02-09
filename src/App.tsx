import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Páginas
import Home from './pages/Home'
import Products from './pages/Products'
import Checkout from './pages/Checkout'

// Componentes
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LocalizacaoContato from './components/LocalizacaoContato'
import Reserva from './components/Reserva'
import SobreNos from './components/SobreNos'
import Destaques from './components/Destaques'
import Footer from './components/Footer'
import OvalMenu from './components/Menu'

const App: React.FC = () => {
  return (
    <Router>
      {/* Exibe o Header e HeroSection em todas as páginas */}
      <Header />
      <HeroSection />

      <Routes>
        {/* Rota da Home */}
        <Route path="/" element={<Home />} />

        {/* Rota de Produtos */}
        <Route path="/products" element={<Products />} />

        {/* Rota de Checkout */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <OvalMenu />
      {/* Exibe os componentes de localização, reserva e sobre nós em todas as páginas */}
      <Reserva />
      <SobreNos />

      {/* Exibe o componente Destaques em todas as páginas */}
      <Destaques />
      <LocalizacaoContato />

      <Footer />
    </Router>
  )
}

export default App
