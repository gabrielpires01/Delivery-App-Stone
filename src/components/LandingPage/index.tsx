import React from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";

function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles["home-title"]}>
                <h1 className={styles.header}>
                    Wecolme to Stone's Shipping App
                </h1>
                <div>
                    Here you can see the best options for shipping your products
                </div>
                <div>Choose the best option</div>
                <div>Then you can set your orders and see them</div>
            </div>
            <div className={styles.pages}>
                <Link to={"/orders"} className={styles.link}>
                    <div>Orders page</div>
                </Link>
                <Link to={"/shipping"} className={styles.link}>
                    <div>Shipping Page</div>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
