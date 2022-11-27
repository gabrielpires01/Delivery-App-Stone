import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ShippingResponse } from "../components/ShippingPage/interfaces/ShippingResponse";
import queryKeys from "../react-query/query_keys";

import endpoints from "./endpoints";

const getShipping = async (id: string): Promise<ShippingResponse> => {
    const res = await fetch(`${endpoints.shippingForm}/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) throw new Error("Algo deu errado");

    const data: ShippingResponse = await res.json();
    return data;
};

function useGetShipping(id: string) {
    const queryClient = useQueryClient();

    const { data, mutate } = useMutation(getShipping, {
        onSuccess: () => {
            queryClient.invalidateQueries([queryKeys.orders]);
        },
    });

    return { data, mutate };
}

export default useGetShipping;
