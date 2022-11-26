import React from "react";
import { RouterProvider } from "react-router-dom";

import Header from "./Header";
import router from "./Router";

import styles from "./index.module.css";

function Page(): JSX.Element {
    return (
        <div className={styles.container}>
            <Header />
            <RouterProvider router={router} />
        </div>
    );
}

export default Page;
