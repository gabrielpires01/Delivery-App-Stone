import React, { FC } from "react";
import { DataProps } from "..";
import checkFastestCheapest from "../../../helpers/check_fastest_cheapest";
import SubmitButton from "../../commons/SubmitButton/SubmitButton";
import { ShippingResponse, Solution } from "../interfaces/ShippingResponse";

import styles from "./FormSelectSolution.module.css";
import Option from "./Option";

interface Props {
    data: ShippingResponse;
    setOrder: (value: DataProps) => void;
}

const FormSelectSolution = ({ data, setOrder }: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const solutionSelected = +e.target.solution.value;

        for (let value of Object.values(solutions)) {
            if (value.logisticOperator === solutionSelected) {
                setOrder({ ...value, id: data.id });
                break;
            }
        }
    };

    const solutions = checkFastestCheapest(data.solutions);

    const shippingSolutions = solutions.map((option, index) => (
        <Option option={option} key={`option-${index}`} />
    ));

    return (
        <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["options-container"]}>
                {shippingSolutions}
            </div>
            <SubmitButton name="Order" />
        </form>
    );
};

export default FormSelectSolution;
