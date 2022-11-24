import React from "react";

import { DataProps } from "..";
import usePostOrder from "../../../api/usePostOrder";
import OrderForm from "../OrderForm/OrderForm";
import OptionContainer from "../Solutions/OptionContainer";

import styles from "./Order.module.css";

interface Props {
    order: DataProps;
}

const Order = ({ order: { id, ...order } }: Props) => {
    const { mutate } = usePostOrder();

    return (
        <div>
            <h1>Finals steps so we can set your shippment</h1>
            <div className={styles.container}>
                <div>
                    <span>Your option</span>
                    <OptionContainer option={order} />
                </div>
                <OrderForm id={id} postForm={mutate} />
            </div>
        </div>
    );
};

export default Order;
