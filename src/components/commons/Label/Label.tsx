import React from "react";

import Input, { InputProps } from "../Input/Input";

import styles from "./Label.module.css";

interface LabelProps extends InputProps {
    label: string;
}

const Label = ({ type, name, label }: LabelProps) => (
    <label className={styles.label}>
        <span className={styles.title}>{label}:</span>
        <Input type={type} name={name} />
    </label>
);
export default Label;
