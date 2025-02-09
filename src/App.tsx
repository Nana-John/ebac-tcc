import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Componentes
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LocalizacaoContato from './components/LocalizacaoContato'
import Reserva from './components/Reserva'
import SobreNos from './components/SobreNos'
import Destaques from './components/Destaques'
import Footer from './components/Footer'
import MenuSection from './components/Menu'

const App: React.FC = () => {
  return (
    <Router>
      {/* Exibe o Header e HeroSection em todas as páginas */}
      <Header />
      <HeroSection />
      <MenuSection />
      {/* Exibe os componentes de localização, reserva e sobre nós em todas as páginas */}
      <SobreNos />

      {/* Exibe o componente Destaques em todas as páginas */}
      <Destaques />
      <LocalizacaoContato />

      <Footer />
    </Router>
  )
}

export default App
