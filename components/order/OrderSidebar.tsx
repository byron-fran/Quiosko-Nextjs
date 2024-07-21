import React from 'react'
import { prisma } from '@/src/lib/prisma';
import CategoryIcon from '../ui/CategoryIcon';
import Logo from '../ui/Logo';


async function getCategories() {
    const categories = await prisma.category.findMany()
    return categories

}
const OrderSidebar = async () => {
    const categories = await getCategories()

    return (
        <aside className='md:w-72 md:h-screen bg-white'>
            <Logo/>
            <nav className="mt-10">
                {categories.map(category => (
                    <CategoryIcon
                        category={category}
                        key={category.id} />
                ))}
            </nav>
        </aside>
    )
}

export default OrderSidebar
