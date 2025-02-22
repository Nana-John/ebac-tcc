import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CardapioItem = {
  id: number
  name: string
  description: string // Adicionado
  image: string // Adicionado
  portion: string // Adicionado
  price: number
  quantity?: number
}

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  total: number
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemInCart) {
        state.items.push({ ...action.payload, quantity: 1 })
      } else {
        itemInCart.quantity! += 1
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
      )
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
      )
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity ?? 1),
        0
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
      state.total = 0
    }
  }
})

export const { add, remove, updateQuantity, close, open, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
