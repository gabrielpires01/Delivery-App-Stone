import React, { FC } from "react";

import styles from "./FormSelectSolution.module.css";

const FormSelectSolution: FC<{ children: JSX.Element[] }> = ({ children }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["options-container"]}>{children}</div>
            <input type="submit"></input>
        </form>
    );
};

export default FormSelectSolution;
