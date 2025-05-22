import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const movieApiUrl = "";


export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: `${movieApiUrl}`}),
    endpoints: (builder) => ({
        getNowPlayingMovies: builder.query({
            query: () => `/now_playing?api_key=${movieApiKey}&`
        })
    })
})

export const {useGetNowPlayingMoviesQuery} = movieApi;