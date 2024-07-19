import { Product } from "@prisma/client";

export type OrderType = Pick<Product, 'id' | 'name' | 'price'> & {
    quantity: number,
    subtotal: number
}