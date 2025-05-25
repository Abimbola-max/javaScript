import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const fakeStoreApiUrl = "https://fakestoreapi.com/products"


export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({baseUrl: `${fakeStoreApiUrl}`}),
    endpoints: (build) => ({
        getAllFakeProducts: build.query({
            query: () => `/products`
        })
    })
})

export const {useGetAllFakeProducts} = fakeStoreApi;