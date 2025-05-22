import React from 'react';
import styles from "./header.module.css"
import {Link} from "react-router";

const Header = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.logo}>LOGO</div>
               <div className={styles.navLinks}>
                   <ul>
                       <li>
                           <Link to="/Home">Home</Link>
                       </li>
                       <li>
                           <Link to="/Login">Already have an account??? Login</Link>
                       </li>
                   </ul>
               </div>
        </nav>
    )
}

export default Header;