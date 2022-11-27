import { useQuery } from "@tanstack/react-query";
import queryKeys from "../react-query/query_keys";
import endpoints from "./endpoints";

export interface OrderResponse {
    quoteId: string;
    customer: Customer;
    id: string;
}

export interface Customer {
    name: string;
    phone: string;
}

const getOrders = async (): Promise<OrderResponse[]> => {
    const res = await fetch(endpoints.orders, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Algo deu errado");

    const data: OrderResponse[] = await res.json();
    return data;
};

function useGetOrders() {
    const { data } = useQuery([queryKeys.orders], getOrders, {
        refetchOnMount: "always",
    });

    return data;
}

export default useGetOrders;
