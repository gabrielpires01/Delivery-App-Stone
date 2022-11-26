import React from "react";

import { OrderResponse } from "../../../api/useGetOrders";
import OrderContainer from "../OrderContainer/OrderContainer";

import styles from "./Container.module.css";

interface Props {
    orders: OrderResponse[];
}

const Container = ({ orders }: Props) => {
    return (
        <div className={styles.container}>
            {orders.map((order) => (
                <OrderContainer order={order} />
            ))}
        </div>
    );
};

export default Container;
