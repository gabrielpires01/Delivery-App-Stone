import React from "react";

import styles from "./SubmitButton.module.css";

interface SubmitProps {
    name: string;
}

const SubmitButton = ({ name }: SubmitProps) => {
    return <input type="submit" value={name} className={styles.submit} />;
};

export default SubmitButton;
