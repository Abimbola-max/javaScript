import {configureStore} from "@reduxjs/toolkit";
import {dummyProductsApi} from "../service/dummyProductApi.jsx";
import {fakeStoreApi} from "../service/fakeStoreApi.jsx";


export const store = configureStore({
    reducer: {
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
        [dummyProductsApi.reducerPath]: dummyProductsApi.reducer,
    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat(fakeStoreApi.middleware, dummyProductsApi.middleware)
    )
})
