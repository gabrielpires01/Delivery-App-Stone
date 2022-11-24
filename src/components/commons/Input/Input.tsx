import React from "react";
import styles from "./Input.module.css";

export interface InputProps {
    type: "number" | "text" | "radio" | "date";
    name: string;
}

const Input = ({ type, name }: InputProps) => (
    <input required className={styles.input} name={name} type={type} />
);
export default Input;
