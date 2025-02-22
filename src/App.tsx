import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import { GlobalCss } from './styles'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout'))

const Rotas = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Suspense>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
