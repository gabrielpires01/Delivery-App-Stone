import React, { useState } from "react";
import useShippingForm from "../../../api/useShippingForm";

import styles from "./Form.module.css";

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
                <label className={styles.label}>
                    <span>Origin zipcode:</span>
                    <input
                        required
                        type="text"
                        name="originZipCode"
                        className={styles.input}
                    />
                </label>
                <label className={styles.label}>
                    <span>Destination zipcode:</span>
                    <input
                        required
                        type="text"
                        name="destinationZipCode"
                        className={styles.input}
                    />
                </label>
                <span>Package dimensions:</span>
                <div className={styles.dimensions}>
                    <label className={styles.label}>
                        <span>Height:</span>
                        <input
                            required
                            type="number"
                            name="height"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Length:</span>
                        <input
                            required
                            type="number"
                            name="length"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        <span>Width:</span>
                        <input
                            required
                            type="number"
                            name="width"
                            className={styles.input}
                        />
                    </label>
                </div>
                <label className={styles.label}>
                    <span>To date:</span>
                    <input
                        required
                        type="date"
                        name="scheduleDate"
                        className={styles.input}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};

export default Form;
