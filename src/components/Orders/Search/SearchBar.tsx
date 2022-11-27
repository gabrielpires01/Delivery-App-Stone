import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./SearchBar.module.css";

interface Props {
    handleClick: (value: string) => void;
}

const SearchBar = ({ handleClick }: Props) => {
    const [value, setValue] = useState("");

    return (
        <div className={styles.container}>
            <input
                placeholder="Shipping Id"
                type="search"
                onBlur={(e) => setValue(e.target.value)}
                className={styles.input}
            />
            <AiOutlineSearch
                onClick={() => handleClick(value)}
                className={styles.icon}
            />
        </div>
    );
};

export default SearchBar;
