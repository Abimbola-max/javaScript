import {createBrowserRouter} from "react-router";
import Layout from "../components/layout/Layout.jsx";
import GetAllFakeProducts from "../components/products/getAllProducts.jsx";
import LandingPage from "../components/pages/landingPage.jsx";
import GetAllDummyProducts from "../components/products/getAllDummyProducts.jsx";

const router = createBrowserRouter([
    {
        path: "",
        element: <LandingPage />
    },
    {
        path: "/fakestore",
        element: <GetAllFakeProducts/>
    },
    {
        path: "/dummystore",
        element: <GetAllDummyProducts/>
    }
])

export default router;