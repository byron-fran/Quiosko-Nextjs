import { Category } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CategoryProps {
    category: Category
}
const CategoryIcon = ({ category }: CategoryProps) => {
    return (
        <div className={`flex items-center gap-4 w-full border-t border-gray-200 last-of-type:border-b p-3`}>
            <div className='w-16 h-16 relative'>
                <Image
                    src={`/icon_${category.slug}.svg`}
                    alt={category.name}
                    fill />
            </div>
            <Link href={`/order/${category.slug}`} className='text-xl font-bold'>{category.name}</Link>
        </div>
    )
}

export default CategoryIcon
