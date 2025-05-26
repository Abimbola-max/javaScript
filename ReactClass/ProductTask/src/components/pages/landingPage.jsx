import React from 'react';
import styles from './LandingPage.module.css';
import {Link} from "react-router";

const LandingPage = () => {
    return (
        <div className={styles.landingWrapper}>
            <div className={styles.content}>
                <h1>Welcome to Bibi's Store</h1>
                <p>Choose the store you want to explore varieties of products</p>
                <div className={styles.links}>
                    <Link to="/dummystore" className={styles.linkButton}>
                        Dummy Store
                    </Link>
                    <Link to="/fakestore" className={styles.linkButton}>
                        Fake Store
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
