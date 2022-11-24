import React from "react";

import styles from "./Button.module.css";

interface Props {
    name: string;
    onClick?: (value: any) => void;
}

const Button = ({ name, onClick = () => {} }: Props) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            {name}
        </button>
    );
};

export default Button;
