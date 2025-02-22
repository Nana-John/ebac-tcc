import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    purchase: builder.mutation({
      query: (order) => ({
        url: '/order',
        method: 'POST',
        body: order,
      }),
    }),
  }),
})

export const { usePurchaseMutation } = api
