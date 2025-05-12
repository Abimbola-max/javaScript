import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
// import {data} from "react-router";

const url = "http://localhost:5000";

export const userAuthApiSlice = createApi({
    reducerPath: "userAuthApi",
    baseQuery: fetchBaseQuery({baseUrl: `${url}`}),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: "/register_seller",
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(data)
            })
        })
    })
});

export const {useSignUpMutation} = userAuthApiSlice