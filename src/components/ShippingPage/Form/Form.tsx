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

const Form = () => {
    const { mutate } = useShippingForm();

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

        mutate(form);

        e.target.reset();
    };

    return (
        <form className={styles.container} onSubmit={(e) => handleSubmit(e)}>
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
            <div className={styles.dimensions}>
                <span>Package dimensions:</span>
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
                    <span>length:</span>
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
    );
};

export default Form;
