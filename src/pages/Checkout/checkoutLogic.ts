import { useMemo } from 'react'
import { useTypedSelector } from '../../store/hooks'

export const useCartTotal = () => {
  const items = useTypedSelector((state) => state.cart.items)

  const totalPrice = useMemo(() => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }, [items])

  return { items, totalPrice }
}
