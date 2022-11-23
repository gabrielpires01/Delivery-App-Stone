import classNames from "classnames";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import styles from "./Menu.module.css";

const Menu = (): JSX.Element => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
                <AiOutlineMenu />
            </button>
            <nav className={classNames(styles["dropdown-content"])}>
                <a href="/">Home</a>
                <a href="/orders">Orders</a>
                <a href="/shipping">Shipping</a>
            </nav>
        </div>
    );
};

export default Menu;
