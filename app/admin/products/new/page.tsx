import Heading from '@/components/ui/Heading'
import React from 'react'
import AddProductForm from '@/components/products/AddProductForm';

const page = () => {

    return (

        <>
            <Heading>Crear un producto</Heading>
            <div className='max-w-3xl mx-auto bg-white mt-10 px-5 py-10 shadow-md rounded-md'>
                <AddProductForm />
            </div>
        </>

    )
}

export default page
