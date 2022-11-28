import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import OrdersPage from "../components/Orders";
import mockOrders from "../mocks/OrdersMock";
import * as getOrders from "../api/useGetOrders";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
        },
    },
});

const wrapper = (children: JSX.Element) => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
    </QueryClientProvider>
);

describe("Orders Page", () => {
    test("Should not load data", async () => {
        jest.spyOn(getOrders, "default").mockImplementation(() => []);

        render(wrapper(<OrdersPage />));

        const emptyText = screen.queryByText(
            "You currently do not have any orders, see the shippings page to order"
        );

        expect(emptyText).toBeTruthy();
    });

    test("Should load data", async () => {
        jest.spyOn(getOrders, "default").mockImplementation(() => [mockOrders]);

        render(wrapper(<OrdersPage />));

        const emptyText = screen.queryByText(
            "You currently do not have any orders, see the shippings page to order"
        );

        expect(emptyText).toBeNull();
    });
});
