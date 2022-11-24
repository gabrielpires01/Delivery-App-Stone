import { useMutation } from "@tanstack/react-query";
import { FormValue } from "../components/ShippingPage/ShippingForm/ShippingForm";
import { ShippingResponse } from "../components/ShippingPage/interfaces/ShippingResponse";
import endpoints from "./endpoints";

const postShippingForm = async (form: FormValue): Promise<ShippingResponse> => {
    const res = await fetch(endpoints.shippingForm, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Algo deu errado");

    const data = await res.json();
    return data;
};

function useShippingForm() {
    const { mutate, data } = useMutation(postShippingForm);

    return { mutate, data };
}

export default useShippingForm;
