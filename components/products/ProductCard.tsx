
import { Product } from '@prisma/client'
import React from 'react';
import { formatCurrency } from '@/src/utils';
import Image from 'next/image';

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className='border bg-white'>
          
            <Image
                src={`/products/${product.image}.jpg`}
                alt={product.name}
                width={400}
                height={500}
             
            />
            <div className="p-5 ">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-600'>{formatCurrency(product.price)}</p>
                <button type='button' className='bg-indigo-600 hover:bg-indigo-700 text-white w-full p-3 '>Agregar</button>
            </div>
        </div>
    )
}

export default ProductCard
