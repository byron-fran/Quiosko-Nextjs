"use client"
import { Product } from "@prisma/client"
import { FC } from "react"
import { useOrder } from "@/src/store/store"
interface Props {
    product: Product
}
const AddToCartButton: FC<Props> = ({ product }) => {
    const { addToCart } = useOrder()
    return (
        <button
            className='bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 '
            type='button'
            onClick={() => addToCart(product)}
        >
            Agregar
        </button>
    )
}

export default AddToCartButton
