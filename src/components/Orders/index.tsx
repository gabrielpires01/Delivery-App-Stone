import React from "react";
import { Link } from "react-router-dom";

import useGetOrders from "../../api/useGetOrders";
import Container from "./Container/Container";

import styles from "./index.module.css";

function OrdersPage() {
    const orders = useGetOrders();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Your orders</h1>
            {orders?.length ? (
                <Container orders={orders} />
            ) : (
                <div className={styles["no-data"]}>
                    <Link to={"/shipping"}>
                        <span>
                            You currently do not have any orders, see the
                            shippings page to order
                        </span>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default OrdersPage;
