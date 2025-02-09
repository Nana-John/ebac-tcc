import React from 'react'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './store'

test('renders the App component', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )

  // Verifica se o texto "Home" está presente (ou qualquer outro texto da página inicial)
  const homeElement = screen.getByText(/home/i)
  expect(homeElement).toBeInTheDocument()
})
