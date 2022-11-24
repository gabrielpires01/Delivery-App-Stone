import React from "react";
import { DataProps } from "..";

import { ShippingResponse } from "../interfaces/ShippingResponse";
import FormSelectSolution from "./FormSelectSolution";

import styles from "./Solutions.module.css";

interface Props {
    data: ShippingResponse;
    setOrder: (value: DataProps) => void;
}

const Solutions = ({ data, setOrder }: Props) => {
    return (
        <div className={styles.container}>
            <div>Options:</div>
            <FormSelectSolution data={data} setOrder={setOrder} />
        </div>
    );
};

export default Solutions;
