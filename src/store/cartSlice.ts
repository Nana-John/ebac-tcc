import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: number
  nome: string
  preco: number
}

interface CartState {
  items: Item[]
}

const initialState: CartState = { items: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
