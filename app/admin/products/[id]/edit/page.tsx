import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation";

const getProductById = async (id: number) => {
    const product = await prisma.product.findUnique({
        where: { id }
    });
    return product
}

const EditProductPage = async ({ params }: { params: { id: string } }) => {

    const product = await getProductById(+params.id);
    if (!product) { notFound() }

    return (
        <>
            <Heading>
                Editar el producto
            </Heading>
            <div className='max-w-3xl mx-auto bg-white mt-10 px-5 py-10 shadow-md rounded-md'>
                <EditProductForm>
                    <ProductForm product={product} />
                </EditProductForm>
            </div>
        </>
    )
}

export default EditProductPage
