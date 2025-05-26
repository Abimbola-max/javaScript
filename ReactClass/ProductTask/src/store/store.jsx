// import {dummyProductsApi} from "../service/dummyProductApi.jsx";
import {fakeStoreApi} from "../service/fakeStoreApi.jsx";
import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        [fakeStoreApi.reducerPath]: fakeStoreApi.reducer
    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat(fakeStoreApi.middleware)
    )
})
