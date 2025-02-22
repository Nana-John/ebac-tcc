import React, { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import { store } from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Lazy loading das páginas
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout'))
const DeliveryPage = lazy(() => import('./pages/Delivery/DeliveryPage'))
const OrderConfirmation = lazy(() => import('./pages/Delivery/OrderConfirmation'))

const Rotas = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:id" element={<Products />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/order-confirmation" element={<OrderConfirmation />} />
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
