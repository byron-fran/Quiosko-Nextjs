"use client"
import { createProduct } from '@/actions/create-product-action';
import { ProductSchema } from '@/src/schema';
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const AddProductForm = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image : formData.get('image')
        };
        const result = ProductSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            });
            return
        }
      await createProduct(result.data)
      toast.success('Producto creado correctamente')
      router.push('/admin/products')
    };

    return (
        <form
            action={handleSubmit}
            className='space-y-5'>
            {children}
            <input
                className='bg-indigo-600 text-white font-bold w-full rounded-md p-2'
                type='submit'
                value='Crear producto' />
        </form>
    )
}

export default AddProductForm
