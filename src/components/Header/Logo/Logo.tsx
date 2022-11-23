import styles from "./Logo.module.css";
import logo from "../../../images/stone.png";
import React from "react";

const Logo = () => {
    return <img src={logo} className={styles.logo} />;
};

export default Logo;
