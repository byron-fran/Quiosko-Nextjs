import { create } from "zustand";
import { OrderType } from "../types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderType[]
    addToCart: (product: Product) => void
}

export const useOrder = create<Store>((set, get) => ({
    order: [],
    addToCart: (product) => {
        const { categoryId, image, ...data } = product
        let order: OrderType[] = []
        if (get().order.find(order => order.id === product.id)) {
            order = get().order.map(order => order.id === product.id ? {
                ...order,
                quantity: order.quantity + 1,
                subtotal: order.price * (order.quantity + 1)
            } : order)
        }
        else {
            order = [...get().order,
            {
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        set(() => ({ order }))
    }
}))