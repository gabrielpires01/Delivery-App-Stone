import React from "react";
import usePostOrder, { OrderProps } from "../../../api/usePostOrder";

import Label from "../../commons/Label/Label";
import SubmitButton from "../../commons/SubmitButton/SubmitButton";

import styles from "./OrderForm.module.css";

interface Props {
    id: string;
    postForm: (value: OrderProps) => void;
}

const OrderForm = ({ id, postForm }: Props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;

        postForm({ id, name, phone });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Label label="Name" name="name" type="text" />
            <Label label="Phone" name="phone" type="text" />
            <SubmitButton name="Confirm Order" />
        </form>
    );
};

export default OrderForm;
