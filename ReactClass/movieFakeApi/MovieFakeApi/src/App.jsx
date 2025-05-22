
import './App.css'
import SignUp from "./components/auth/signUp/signUp.jsx";
import Login from "./components/auth/login/login.jsx";
import router from "./router/routes.jsx";
import {RouterProvider} from "react-router";

function App() {

    return (

        <RouterProvider router={router}/>
        // <>
        //   <SignUp />
        //     {/*<Login />*/}
        // </>
    )
}

export default App
