import { Solution } from "../components/ShippingPage/interfaces/ShippingResponse";

const checkFastestCheapest = (data: Solution[]) => {
    const cheapest = data.reduce(function (prev, current) {
        return prev.price < current.price ? prev : current;
    });

    const fastest = data.reduce(function (prev, current) {
        return prev.deliveryTime < current.deliveryTime ? prev : current;
    });

    const newSolutions = [
        { ...cheapest, cheapest: true, fastest: false },
        { ...fastest, fastest: true, cheapest: false },
    ];

    return newSolutions;
};

export default checkFastestCheapest;
