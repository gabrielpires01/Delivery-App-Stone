export interface Solution {
    deliveryTime: Date;
    price: number;
    logisticOperator: number;
    cheapest?: boolean;
    fastest?: boolean;
}

export interface ShippingResponse {
    solutions: Solution[];
    id: string;
}
