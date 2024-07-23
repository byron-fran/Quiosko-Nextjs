"use client"
import { createProduct } from '@/actions/create-product-action';
import { ProductSchema } from '@/src/schema';
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { updateProduct } from '@/actions/update-product-action';
import { useParams } from 'next/navigation';

const EditProductForm = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const params = useParams()
    const id = params.id!

    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            price: formData.get('price'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image')
        };
        const result = ProductSchema.safeParse(data)
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            });
            return
        }
        await updateProduct(result.data, +id)
        toast.success('Producto Actualizado correctamente')
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
                value='Guardar cambios' />
        </form>
    )
}

export default EditProductForm
