// import Layout from "../components/layout/Layout.jsx";
// import GetAllFakeProducts from "../components/products/getAllProducts.jsx";
// import {createBrowserRouter} from "react-router";
//
//
// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Layout/>,
//         children: [
//             {
//                 path: "/products",
//                 element: <GetAllFakeProducts/>
//             }
//         ]
//     }
// ])
//
// export default router;


import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import GetAllFakeProducts from "../components/products/getAllProducts.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/products",
        element: <GetAllFakeProducts/>
    }
])

export default router;