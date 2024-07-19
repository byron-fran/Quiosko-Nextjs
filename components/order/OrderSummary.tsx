"use client"
import { useOrder } from '@/src/store/store'
import React, { useMemo } from 'react'
import OrderDetail from './OrderDetail';
import { formatCurrency } from '@/src/utils';
import { createOrder } from '@/actions/create-order-action';
import { OrderSchema } from '@/src/schema';
import { toast } from 'react-toastify';


const OrderSummary = () => {

    const { order, clearCart } = useOrder();
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);

    const handleCreateOrder = async (formData: FormData) => {

        const data = {
            name: formData.get('name'),
            order,
            total
        }
        const result = OrderSchema.safeParse(data);

        if (!result.success) {

            result.error.issues.forEach(error => {
                toast.error(error.message)
            })

            return
        };

        const response = await createOrder(data)
        if (response?.error) {

            response.error.issues.forEach(error => {
                toast.error(error.message)
            })

            return
        };

        toast.success('Pedido realizado correctamente')
        clearCart()
    };

    return (
        <aside className='lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-6'>
            <h1 className='text-4xl text-center font-black'>Mi pedido</h1>
            <div className="mt-5">
                {order.length === 0 ? <p className='text-center'>No hay ordenes</p> : (
                    <>
                        {order.map(order => (
                            <OrderDetail item={order} key={order.id} />
                        ))}

                        <p className='text-2xl mt-20 text-center'>Total a pagar
                            {' '}<span className='font-bold'>{formatCurrency(total)}</span>
                        </p>
                        <form
                            action={handleCreateOrder}
                            className=' w-full mt-10 space-y-5 '>
                            <input
                                className='w-full mt-10 border border-gray-100 p-2  rounded'
                                placeholder='Tu nombre'
                                name='name'
                                type="text" />
                            <input
                                className='py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer'
                                type="submit"
                                value='Confirmar pedido' />
                        </form>
                    </>
                )}
            </div>
        </aside>
    )
}

export default OrderSummary
