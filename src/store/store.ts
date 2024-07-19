import { create } from "zustand";
import { OrderType } from "../types";
import { Product } from "@prisma/client";

interface Store {
    order : OrderType[]
    addToCart : (product : Product) => void
}

export const useOrder = create<Store>((state) => ({
    order : [],
    addToCart : (product) => {
        console.log('agregando..', product)
    }
}))