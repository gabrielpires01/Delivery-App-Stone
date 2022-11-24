import React, { useState } from "react";
import useShippingForm from "../../api/useShippingForm";

import Form from "./Form/Form";

import styles from "./index.module.css";
import Solutions from "./Solutions/Solutions";

function ShippingPage() {
    const { mutate, data } = useShippingForm();
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={styles.container}>
            {isOpen ? (
                <Form postShipping={mutate} setIsOpen={setIsOpen} />
            ) : (
                <button onClick={() => setIsOpen((prev) => !prev)}>
                    Open Form
                </button>
            )}
            {data && <Solutions data={data} />}
        </div>
    );
}

export default ShippingPage;
