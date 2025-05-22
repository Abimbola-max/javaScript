import router from "./router/routes.jsx";
import './App.css'
import {BrowserRouter, RouterProvider} from "react-router";

function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
