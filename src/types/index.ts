import { Order, OrderProducts, Product } from "@prisma/client";

export type OrderType = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number,
    subtotal: number
};

export type OrderWithProducts = Order & {
    orderProducts: (OrderProducts & {
        product: Product
    })[]
}