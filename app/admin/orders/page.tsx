import OrderCard from '@/components/admin/OrderCard';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'
import React from 'react'

const getOrders = async () => {
  const orders = await prisma.order.findMany({
    where: {
      status: false
    },
    include: {
      orderProducts: {
        include: { product: true }
      }
    }
  });

  return orders
}

const OrdersPage = async () => {
  const orders = await getOrders();

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
