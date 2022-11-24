import React, { useState } from "react";

import useShippingForm from "../../api/useShippingForm";
import Solutions from "./Solutions/Solutions";
import Order from "./Order/Order";
import Form from "./ShippingForm/ShippingForm";

import styles from "./index.module.css";

export interface DataProps {
    deliveryTime: Date;
    price: number;
    logisticOperator: number;
    cheapest: boolean;
    fastest: boolean;
    id: string;
}

function ShippingPage() {
    const initialData: DataProps = {
        deliveryTime: new Date(),
        price: 0,
        logisticOperator: 0,
        cheapest: false,
        fastest: false,
        id: "",
    };

    const { mutate: postShipping, data: shippingOptions } = useShippingForm();
    const [isOpen, setIsOpen] = useState(true);
    const [order, setOrder] = useState<DataProps>(initialData);

    return (
        <div className={styles.container}>
            {!order.id ? (
                <>
                    {isOpen ? (
                        <Form
                            postShipping={postShipping}
                            setIsOpen={setIsOpen}
                        />
                    ) : (
                        <button onClick={() => setIsOpen((prev) => !prev)}>
                            Open Form
                        </button>
                    )}
                    {shippingOptions && (
                        <Solutions data={shippingOptions} setOrder={setOrder} />
                    )}
                </>
            ) : (
                <Order order={order} />
            )}
        </div>
    );
}

export default ShippingPage;
