import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const dummyProductsApiUrl = "'https://dummyjson.com"


export const dummyProductsApi = createApi({
    reducerPath: 'dummyProductsApi',
    baseQuery: fetchBaseQuery({baseUrl: `${dummyProductsApiUrl}`}),
    endpoints: (build) => ({
        getAllDummyProducts: build.query({
            query: () => "/storey"
        })
    })
})

export const {useGetAllDummyProductsQuery} = dummyProductsApi;