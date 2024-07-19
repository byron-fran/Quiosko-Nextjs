import { Product } from '@prisma/client'
import React from 'react';
import { formatCurrency } from '@/src/utils';

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className='border bg-white'>
            <div className="p-5 ">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-600'>{formatCurrency(product.price)}</p>
            </div>
        </div>
    )
}

export default ProductCard
