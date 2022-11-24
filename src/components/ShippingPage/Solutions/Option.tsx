import React from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";

import { Solution } from "../interfaces/ShippingResponse";

import styles from "./Option.module.css";

interface Props {
    option: Solution;
}

function OptionContainer({ option }: Props) {
    return (
        <div className={styles.container}>
            <input
                type="radio"
                id={`operator-${option.logisticOperator}`}
                name="solution"
            />
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
                Delivery date:{" "}
                {option.deliveryTime.toLocaleString().split("T")[0]}
            </div>
            <div>R$ {option.price}</div>
            <div>Logistic Operator {option.logisticOperator}</div>
        </div>
    );
}

export default OptionContainer;
