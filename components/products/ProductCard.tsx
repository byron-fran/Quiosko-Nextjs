
import { Product } from '@prisma/client'
import React from 'react';
import { convertedImage, formatCurrency } from '@/src/utils';
import Image from 'next/image';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    
    return (
        <div className='border bg-white'>
          
            <Image
                src={convertedImage(product.image)}
                alt={product.name}
                width={400}
                height={500}
             
            />
            <div className="p-5 ">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className='mt-5 font-black text-4xl text-amber-600'>{formatCurrency(product.price)}</p>
               <AddToCartButton product={product}/>
            </div>
        </div>
    )
}

export default ProductCard
