import React from "react";

import { OrderResponse } from "../../../api/useGetOrders";

import styles from "./OrderContainer.module.css";

interface Props {
    order: OrderResponse;
}

const OrderContainer = ({ order }: Props) => {
    return (
        <div className={styles.container}>
            <span>Name: {order.customer.name}</span>
            <span>Phone: {order.customer.phone}</span>
            <span>
                Order: <br />
                {order.id}
            </span>
            <span>
                Shipping: <br />
                {order.quoteId}
            </span>
        </div>
    );
};

export default OrderContainer;
