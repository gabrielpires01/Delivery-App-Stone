import { useMutation } from "@tanstack/react-query";

import endpoints from "./endpoints";

export interface OrderProps {
    id: string;
    name: string;
    phone: string;
}

interface FormatOrder {
    quoteId: string;
    customer: {
        name: string;
        phone: string;
    };
}

interface ResponseFormatOrder extends FormatOrder {
    id: string;
}

const postOrder = async (order: OrderProps): Promise<ResponseFormatOrder[]> => {
    const format: FormatOrder = {
        quoteId: order.id,
        customer: {
            name: order.name,
            phone: order.phone,
        },
    };

    const res = await fetch(endpoints.order, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(format),
    });

    if (!res.ok) throw new Error("Algo deu errado");

    const data = await res.json();
    return data;
};

function usePostOrder() {
    const { mutate, data } = useMutation(postOrder);

    return { mutate, data };
}

export default usePostOrder;
