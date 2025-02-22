import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Restaurant {
  destacado: boolean
  id: string
  name: string
  descricao: string
  tipo: string
  capa: string
  avaliacao: number
  cardapio: string[] // Adicionando o cardápio se for necessário para o seu modelo
}

interface PurchaseData {
  productId: string
  quantity: number
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/checkout'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => 'restaurants'
    }),

    getRestaurantById: builder.query<Restaurant, string>({
      query: (id) => `restaurants/${id}`
    }),

    purchase: builder.mutation<void, PurchaseData>({
      query: (purchaseData) => ({
        url: 'purchase',
        method: 'POST',
        body: purchaseData
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantByIdQuery,
  usePurchaseMutation
} = api
