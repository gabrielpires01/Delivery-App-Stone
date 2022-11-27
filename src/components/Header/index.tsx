import React from "react";

import Logo from "./Logo/Logo";

import styles from "./index.module.css";
import Menu from "./Menu/Menu";

function Header() {
    return (
        <div className={styles.container}>
            <Logo />
            <h1 className={styles["header-text"]}>Shipping App</h1>
            <Menu />
        </div>
    );
}

export default Header;
