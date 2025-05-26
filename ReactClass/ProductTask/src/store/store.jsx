import {configureStore} from "@reduxjs/toolkit";
import {dummyProductsApi} from "../service/dummyProductApi.jsx";
import {fakeStoreApi} from "../service/fakeStoreApi.jsx";


export const store = configureStore({
    reducer: {
        [dummyProductsApi.reducerPath]: dummyProductsApi.reducer,
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat(dummyProductsApi.middleware, fakeStoreApi.middleware)
    )
})
