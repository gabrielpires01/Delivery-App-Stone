import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";

import { FastestCheapest } from "../../../helpers/check_fastest_cheapest";

import styles from "./OptionContainer.module.css";

interface Props {
    option: FastestCheapest;
}

const OptionContainer = ({ option }: Props) => {
    return (
        <div className={styles.container}>
            <div>
                {option.fastest ? (
                    option.cheapest ? (
                        <>
                            <AiFillThunderbolt />
                            <MdOutlineAttachMoney />
                        </>
                    ) : (
                        <AiFillThunderbolt />
                    )
                ) : option.cheapest ? (
                    <MdOutlineAttachMoney />
                ) : null}
            </div>
            <div>
                Delivery date:
                {option.deliveryTime?.toLocaleString().split("T")[0]}
            </div>
            <div>R$ {option.price}</div>
            <div>Logistic Operator {option.logisticOperator}</div>
        </div>
    );
};

export default OptionContainer;
