import React from "react";

import styles from "./SubmitButton.module.css";

interface SubmitProps {
    name: string;
    onClick?: () => void;
}

const SubmitButton = ({ name, onClick }: SubmitProps) => {
    return (
        <input
            type="submit"
            value={name}
            className={styles.submit}
            onClick={onClick}
        />
    );
};

export default SubmitButton;
