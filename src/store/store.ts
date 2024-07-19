import { create } from "zustand";
import { OrderType } from "../types";
import { Product } from "@prisma/client";

interface Store {
    order: OrderType[]
    addToCart: (product: Product) => void
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    removeItem : (id : Product['id']) => void
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
    },
    increaseQuantity: (id) => {
        set((state) => ({
            order: state.order.map(order => order.id === id ? {
                ...order,
                quantity: order.quantity + 1,
                subtotal: order.price * (order.quantity + 1)
            } : order)
        }))
    },
    decreaseQuantity: (id) => {
        const order = get().order.map(order => order.id === id
            ? {
                ...order,
                quantity: order.quantity - 1,
                subtotal: order.price * (order.quantity - 1)
            }
            : order);
        set(() => ({
            order
        }))
    },
    removeItem : (id) => {
        set((state) => ({
            order : state.order.filter(order => order.id !== id)
        }))
    }
}))