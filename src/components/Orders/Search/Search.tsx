import React from "react";

import useGetShipping from "../../../api/useGetShipping";
import SearchBar from "./SearchBar";
import ShippingInfo from "./ShippingInfo";

import styles from "./Search.module.css";

const Search = () => {
    const { data, mutate } = useGetShipping("");

    const handleClick = (value: string) => {
        mutate(value);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Search for information about your shipping
            </h2>
            <SearchBar handleClick={handleClick} />
            {data && <ShippingInfo data={data} />}
        </div>
    );
};

export default Search;
