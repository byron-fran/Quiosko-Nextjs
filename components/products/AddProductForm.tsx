import React from 'react'
import ProductForm from './ProductForm'

const AddProductForm = () => {
    return (
        <form className='space-y-5'>
            <ProductForm />
            <input className='bg-indigo-600 text-white font-bold w-full rounded-md p-2' type='submit' value='Crear producto' />
        </form>
    )
}

export default AddProductForm
