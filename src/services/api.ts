import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/checkout'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<any, void>({
      query: () => 'restaurants'
    }),
    getRestaurantById: builder.query<any, string>({
      query: (id) => `restaurants/${id}`
    }),
    purchase: builder.mutation({
      query: (purchaseData) => ({
        url: 'purchase',
        method: 'POST',
        body: purchaseData
      })
    })
  })
})

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = api
