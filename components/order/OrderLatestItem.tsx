import { OrderWithProducts } from '@/src/types'
import { formatCurrency } from '@/src/utils'
import React, { FC } from 'react'

interface OrderLatestItemProps {
  order: OrderWithProducts
}

const OrderLatestItem: FC<OrderLatestItemProps> = ({ order }) => {
  return (
    <div className='bg-white shadow p-5 space-y-5 rounded-lg'>
      <p className="text-2xl font-bold text-slate-600">
        Cliente: {order.name}
      </p>
      <ul
        className='divide-y text-sm font-medium divide-gray-200 border-t border-gray-200 '
     >
        {order.orderProducts.map(product => (
          <li key={product.id} className='flex py-6 text-lg '>
            <p>
              <span className='font-bold'>
                ({product.quantity})
              </span>
              {product.product.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderLatestItem
