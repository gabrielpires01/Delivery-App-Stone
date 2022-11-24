import { Solution } from "../components/ShippingPage/interfaces/ShippingResponse";

export interface FastestCheapest extends Solution {
    cheapest: boolean;
    fastest: boolean;
}

const checkFastestCheapest = (data: Solution[]): FastestCheapest[] => {
    const cheapest = data.reduce(function (prev, current) {
        return prev.price < current.price ? prev : current;
    });

    const fastest = data.reduce(function (prev, current) {
        return prev.deliveryTime < current.deliveryTime ? prev : current;
    });

    const newSolutions: FastestCheapest[] = [
        { ...cheapest, cheapest: true, fastest: false },
        { ...fastest, fastest: true, cheapest: false },
    ];

    return newSolutions;
};

export default checkFastestCheapest;
