import React from "react";

import { FastestCheapest } from "../../../helpers/check_fastest_cheapest";
import OptionContainer from "./OptionContainer";

import styles from "./Option.module.css";

interface Props {
    option: FastestCheapest;
}

function Option({ option }: Props) {
    return (
        <div className={styles.container}>
            <input
                type="radio"
                id={`operator-${option.logisticOperator}`}
                name="solution"
                required
                value={option.logisticOperator}
            />
            <OptionContainer option={option} />
        </div>
    );
}

export default Option;
