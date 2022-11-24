import React from "react";

import Label from "../../commons/Label/Label";
import SubmitButton from "../../commons/SubmitButton/SubmitButton";

import styles from "./ShippingForm.module.css";

export interface FormValue {
    originZipCode: string;
    destinationZipCode: string;
    packageDimensions: {
        height: number;
        width: number;
        length: number;
    };
    scheduleDate: string;
}

interface Props {
    postShipping: (value: FormValue) => void;
    setIsOpen: (value: boolean) => void;
}

const Form = ({ postShipping, setIsOpen }: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form: FormValue = {
            originZipCode: e.target.originZipCode.value,
            destinationZipCode: e.target.destinationZipCode.value,
            packageDimensions: {
                height: e.target.height.value,
                width: e.target.width.value,
                length: e.target.length.value,
            },
            scheduleDate: e.target.scheduleDate.value,
        };

        postShipping(form);
        setIsOpen(false);
    };

    return (
        <>
            <h1>
                Fill this form bellow so we can informe you the options for
                shipping:
            </h1>
            <form
                className={styles.container}
                onSubmit={(e) => handleSubmit(e)}
            >
                <Label
                    label="Origin zipcode"
                    type="text"
                    name="originZipCode"
                />
                <Label
                    label="Destination zipcode"
                    type="text"
                    name="destinationZipCode"
                />
                <span>Package dimensions:</span>
                <div className={styles.dimensions}>
                    <Label label="Height (cm)" type="number" name="height" />
                    <Label label="Length (cm)" type="number" name="length" />
                    <Label label="Width (cm)" type="number" name="width" />
                </div>
                <Label label="To date" type="date" name="scheduleDate" />
                <SubmitButton name="Search" />
            </form>
        </>
    );
};

export default Form;
