import React from "react";
import checkFastestCheapest from "../../../helpers/check_fastest_cheapest";

import { ShippingResponse, Solution } from "../interfaces/ShippingResponse";
import FormSelectSolution from "./FormSelectSolution";
import OptionContainer from "./Option";

import styles from "./Solutions.module.css";

interface Props {
    data: ShippingResponse;
}

const Solutions = ({ data }: Props) => {
    const solutions = checkFastestCheapest(data.solutions);

    const shippingSolutions = solutions.map((option, index) => (
        <OptionContainer option={option} key={`option=${index}`} />
    ));

    return (
        <div className={styles.container}>
            <div>Options:</div>
            <FormSelectSolution>{shippingSolutions}</FormSelectSolution>
        </div>
    );
};

export default Solutions;
