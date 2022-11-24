import React, { FC } from "react";
import SubmitButton from "../../commons/SubmitButton/SubmitButton";

import styles from "./FormSelectSolution.module.css";

const FormSelectSolution: FC<{ children: JSX.Element[] }> = ({ children }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["options-container"]}>{children}</div>
            <SubmitButton name="Abrir pedido" />
        </form>
    );
};

export default FormSelectSolution;
