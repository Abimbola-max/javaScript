import {Outlet} from "react-router";
import Header from "../header/header.jsx"
import style from "./layout.module.css";

const Layout = () => {
    return (
        <div className={style.layOutWrapper}>
            <Header/>
            <div className={style.sideBarOutlet}>
                {/*<SideBar/>*/}
                <Outlet/>
            </div>
            {/*<Footer/>*/}
        </div>
    )
}

export default Layout;