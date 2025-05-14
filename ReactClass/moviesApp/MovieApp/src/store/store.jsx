import {configureStore} from "@reduxjs/toolkit"
// import {setupListeners} from "@reduxjs/toolkit/query"
import {userAuthApiSlice} from "../service/userAuthApi.jsx";
import {movieApi} from "../service/movieAPI.jsx";


export const store = configureStore({
    reducer: {
        [userAuthApiSlice.reducerPath]: userAuthApiSlice.reducer,
        [movieApi.reducerPath] : movieApi.reducer,
    },
    middleware:(getDefaultMiddleware) => (
        getDefaultMiddleware().concat(userAuthApiSlice.middleware)
    )
})

// export default store;
// setupListeners(store.dispatch);