"use client"
import OrderCard from '@/components/admin/OrderCard';
import Heading from '@/components/ui/Heading'
import useSWR from 'swr';
import React from 'react'
import { OrderWithProducts } from '@/src/types';

const OrdersPage = () => {

  const url = '/admin/orders/api';
  const fetcher = () => fetch(url)
    .then(res => res.json())
    .then(data => data)

  const { data: orders, isLoading, error } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false
  });

  if(isLoading) return 'loading...'
  if (orders)
    return (
      <>
        <Heading>
          Administra tus ordenes
        </Heading>
        {orders.length ?
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5 '>
            {orders.map(order => (
              <OrderCard order={order} key={order.id} />
            ))}
          </div> :
          <p className='text-center'>Aún no tienes ordenes </p>}

      </>
    )
}

export default OrdersPage
