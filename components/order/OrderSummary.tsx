"use client"
import { useOrder } from '@/src/store/store'
import React from 'react'


const OrderSummary = () => {
    const { order } = useOrder();

    return (
        <aside className='lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-6'>
            <h1 className='text-4xl text-center font-black'>Mi pedido</h1>
            {order.length === 0 ? <p className='text-center'>No hay ordenes</p> : (
                <>
                
                </>
            )}
        </aside>
    )
}

export default OrderSummary
