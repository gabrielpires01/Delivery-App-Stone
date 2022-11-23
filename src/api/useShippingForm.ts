import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormValue } from "../components/ShippingPage/Form/Form";
import endpoints from "./endpoints";

const postShippingForm = async (form: FormValue) => {
    const res = await fetch(endpoints.shippingForm, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    return res;
};

function useShippingForm() {
    const { mutate } = useMutation(postShippingForm);

    return { mutate };
}

export default useShippingForm;
