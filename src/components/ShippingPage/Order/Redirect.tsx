import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../commons/Button/Button";

import styles from "./Redirect.module.css";

const Redirect = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <h1>Done, your order has been shipped!</h1>
            <Button name="See orders" onClick={() => navigate("/orders")} />
        </div>
    );
};

export default Redirect;
