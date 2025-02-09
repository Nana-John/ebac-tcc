import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

test('renders all main components', () => {
  render(
    <Router>
      <App />
    </Router>
  )

  // Verifica se o Header está renderizando
  expect(screen.getByRole('banner')).toBeInTheDocument()

  // Verifica se o HeroSection está renderizando
  expect(screen.getByText(/bem-vindo/i)).toBeInTheDocument()

  // Verifica se o MenuSection está renderizando
  expect(screen.getByText(/nosso cardápio/i)).toBeInTheDocument()

  // Verifica se o SobreNos está renderizando
  expect(screen.getByText(/sobre nós/i)).toBeInTheDocument()

  // Verifica se os Destaques estão renderizando
  expect(screen.getByText(/destaques/i)).toBeInTheDocument()

  // Verifica se o LocalizacaoContato está renderizando
  expect(screen.getByText(/entre em contato/i)).toBeInTheDocument()

  // Verifica se o Footer está renderizando
  expect(screen.getByRole('contentinfo')).toBeInTheDocument()
})
