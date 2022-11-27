import React from "react";

import checkFastestCheapest from "../../../helpers/check_fastest_cheapest";
import { ShippingResponse } from "../../ShippingPage/interfaces/ShippingResponse";
import OptionContainer from "../../ShippingPage/Solutions/OptionContainer";

import styles from "./ShippingInfo.module.css";

interface Props {
    data: ShippingResponse;
}

const ShippingInfo = ({ data }: Props) => {
    const solutions = checkFastestCheapest(data.solutions);

    const solutionsContainers = solutions.map((solution) => (
        <OptionContainer option={solution} />
    ));

    return <div className={styles.container}>{solutionsContainers}</div>;
};

export default ShippingInfo;
