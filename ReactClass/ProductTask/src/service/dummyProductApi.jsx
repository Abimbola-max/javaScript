import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const dummyProductsApiUrl = "'https://dummyjson.com/products"


export const dummyProductsApi = createApi({
    reducerPath: 'dummyProductsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${dummyProductsApiUrl}`}),
    endpoints: (build) => ({
        getAllDummyProducts: build.query({
            query: () => ""
        })
    })
})

export const {useGetAllDummyProductsQuery} = dummyProductsApi;