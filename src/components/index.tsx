import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function Page(): JSX.Element {
    return <RouterProvider router={router} />;
}

export default Page;
