import ProductCard from '@/components/products/ProductCard'
import { prisma } from '@/src/lib/prisma'
import React from 'react'

async function getProducts(category: string) {
    const products = await prisma.product.findMany({
        where: {
            category: {
                slug: category
            }
        }
    })
    return products
}

export default async function OrdersPage({ params }: { params: { category: string } }) {
    const products = await getProducts(params.category)

    return (
        <>
            <h2 className='mt-10 text-2xl'>Elige y personaliza tu pedido</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-start'>
                {products.map((product) =>
                    (<ProductCard key={product.id} product={product} />)
                )}

            </div>
        </>
    )
}


