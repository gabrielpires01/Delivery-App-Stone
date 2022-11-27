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

const getOrder = async (): Promise<OrderResponse[]> => {
    const res = await fetch(endpoints.order, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Algo deu errado");

    const data: OrderResponse[] = await res.json();
    return data;
};

function useGetOrders() {
    const { data } = useQuery([queryKeys.orders], getOrder, {
        refetchOnMount: "always",
    });

    return data;
}

export default useGetOrders;
