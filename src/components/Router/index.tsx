import React from "react";
import { createBrowserRouter } from "react-router-dom";

import LandingPage from "../LandingPage";
import OrdersPage from "../Orders";
import ShippingPage from "../ShippingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/orders",
        element: <OrdersPage />,
    },
    {
        path: "/shipping",
        element: <ShippingPage />,
    },
]);

export default router;
