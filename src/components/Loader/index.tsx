import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import React, { FC } from "react";
import { createPortal } from "react-dom";

import queryKeys from "../../react-query/query_keys";

import styles from "./index.module.css";

const Loader: FC = () => {
    const fetchQty = useIsFetching({
        predicate({ queryKey }) {
            return !queryKey.includes(queryKeys.nonBlocking);
        },
    });
    const mutateQty = useIsMutating();

    const isHidden = mutateQty === 0 && fetchQty === 0;

    return createPortal(
        <div hidden={isHidden}>
            <div className={styles.container}>
                <div className={styles["lds-default"]}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Loader;
