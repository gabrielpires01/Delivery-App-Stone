import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../LandingPage";
import OrdersPage from "../Orders";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/orders",
        element: <OrdersPage />,
    },
]);

export default router;
