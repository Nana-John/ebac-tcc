import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the checkout heading', () => {
  render(<App />)
  const headingElement = screen.getByText(/Checkout/i) // Ajuste para o texto que está no seu App
  expect(headingElement).toBeInTheDocument()
})

test('renders the total price', () => {
  render(<App />)
  const priceElement = screen.getByText(/Total: R\$/) // Ajuste para o valor que espera ver
  expect(priceElement).toBeInTheDocument()
})
