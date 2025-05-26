// import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
//
// const dummyProductsApiUrl = "https://fakestoreapi.com/products"
//
//
// export const dummyProductsApi = createApi({
//     reducerPath: 'dummyProductsApi',
//     baseQuery: fetchBaseQuery({baseUrl: `${dummyProductsApiUrl}`}),
//     endpoints: (build) => ({
//         getAllDummyProducts: build.query({
//             query: () => `/dummy_products`
//         })
//     })
// })
//
// export const {useGetAllDummyProducts} = dummyProductsApi;