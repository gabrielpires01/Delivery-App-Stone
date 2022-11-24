export interface Solution {
    deliveryTime: Date;
    price: number;
    logisticOperator: number;
}

export interface ShippingResponse {
    solutions: Solution[];
    id: string;
}
