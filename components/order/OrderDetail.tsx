import { useOrder } from "@/src/store/store"
import { OrderType } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import { XCircleIcon, PlusIcon, MinusIcon } from "@heroicons/react/20/solid"
import { FC, useMemo } from "react"

interface OrderDetaiProps {
    item: OrderType
}
const MAX_QUANTIY = 5
const MIN_QUANTITY = 1

const OrderDetail: FC<OrderDetaiProps> = ({ item }) => {

    const { increaseQuantity, decreaseQuantity, removeItem } = useOrder();
    const disableMaxQunatity = useMemo(() => item.quantity === MAX_QUANTIY, [item])
    const disableminQuantity = useMemo(() => item.quantity === MIN_QUANTITY, [item])

    return (
        <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{item.name} </p>

                    <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                    >
                        <XCircleIcon className="text-red-600 h-8 w-8" />
                    </button>
                </div>
                <p className="text-2xl text-amber-500 font-black">
                    {formatCurrency(item.price)}
                </p>
                <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
                    <button
                        type="button"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={disableminQuantity}
                        className=" disabled:opacity-10"
                    >
                        <MinusIcon className="h-6 w-6" />
                    </button>

                    <p className="text-lg font-black ">
                        {item.quantity}
                    </p>

                    <button
                        type="button"
                        onClick={() => increaseQuantity(item.id)}
                        disabled={disableMaxQunatity}
                        className=" disabled:opacity-10"
                    >
                        <PlusIcon className="h-6 w-6" />
                    </button>
                </div>
                <p className="text-xl font-black text-gray-700">
                    Subtotal: {item.subtotal}
                    <span className="font-normal">

                    </span>
                </p>
            </div>
        </div>
    )
}

export default OrderDetail
