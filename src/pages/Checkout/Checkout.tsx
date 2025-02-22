import { CheckoutForm } from './CheckoutForm'
import { useCartTotal } from './checkoutLogic'
import { useTypedDispatch } from '../../store/hooks'
import { clearCart } from '../../store/cartSlice'
import { toast } from 'react-toastify'

const Checkout: React.FC = () => {
  const { items, totalPrice } = useCartTotal()
  const dispatch = useTypedDispatch()

  const handleCheckout = (values: any) => {
    if (items.length === 0) {
      toast.warn('Seu carrinho está vazio!')
      return
    }

    console.log('Compra realizada com sucesso!', values)
    dispatch(clearCart())
    toast.success('Compra finalizada com sucesso!')
  }

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm onSubmit={handleCheckout} />
      <p>Total: R$ {totalPrice.toFixed(2)}</p>
    </div>
  )
}

export default Checkout
