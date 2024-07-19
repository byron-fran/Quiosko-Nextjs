"use client"
import { useOrder } from '@/src/store/store'
import React, { useMemo } from 'react'
import OrderDetail from './OrderDetail';
import { formatCurrency } from '@/src/utils';


const OrderSummary = () => {
    const { order } = useOrder();
    const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

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
                    </>
                )}
            </div>
        </aside>
    )
}

export default OrderSummary
