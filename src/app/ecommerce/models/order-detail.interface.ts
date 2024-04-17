export interface IOrder {
    orderId: string;
    orderDate: Date;
    orderStatus: OrderStatus;
    subTotal: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    productId: string;
    productName: string;
    productImage: string;
    subCatalogName: string;
    productPrice: number;
    productQuantity: number;
    productTotal: number;

}
export enum OrderStatus {
    Pending = 'Pending',
    Processing = 'Processing',
    Completed = 'Completed',
    Cancelled = 'Cancelled'
}