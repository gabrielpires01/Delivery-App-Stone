import React from "react";
import { RouterProvider } from "react-router-dom";

import Header from "./Header";
import router from "./Router";

function Page(): JSX.Element {
    return (
        <>
            <Header />
            <RouterProvider router={router} />
        </>
    );
}

export default Page;
