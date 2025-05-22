import React from 'react'
import Footer from "../footer/Footer.jsx";
import Body from "../body/Body.jsx";
import Header from "../header/Header.jsx";


const Layout =()=> {
    return(
        <div>
            <div>
                <Header/>
            </div>
            <Body/>
            <div>
                <Footer/>
            </div>
        </div>

    )
}
export default Layout;
