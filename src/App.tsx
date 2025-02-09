import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// Componentes
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LocalizacaoContato from './components/LocalizacaoContato'
import SobreNos from './components/SobreNos'
import Destaques from './components/Destaques'
import Footer from './components/Footer'
import MenuSection from './components/Menu'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <HeroSection />
      <MenuSection />
      <SobreNos />
      <Destaques />
      <LocalizacaoContato />

      <Footer />
    </Router>
  )
}

export default App
