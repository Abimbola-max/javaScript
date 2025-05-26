import React from 'react'
import Footer from "../footer/Footer.jsx";
import Body from "../body/Body.jsx";
import Header from "../header/Header.jsx";
import style from "./layout.module.css";


const Layout =()=> {
    return(
        <div className={style.layOutWrapper}>
            <Header/>
            <div>
                <Body/>
            </div>
            <Footer/>
        </div>

    )
}
export default Layout;
