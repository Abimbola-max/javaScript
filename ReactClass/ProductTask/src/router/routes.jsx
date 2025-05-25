import Layout from "../components/layout/Layout.jsx";


const router = createBrowserRouter([
    {
        path: "/home",
        element: <Layout />,
        children: [{
            path: "fakestore",
            element: <FakeStorePage />,
        }]
    }
])