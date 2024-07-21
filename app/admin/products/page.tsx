import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma';

const getProducts = async () => {
    const products = await prisma.product.findMany({
        include: { category: true }
    });
    return products
};

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>;

const page = async () => {
    const products = await getProducts()
    return (
        <>
            <Heading>
                Adminstrar tus productos
            </Heading>
            <ProductTable products={products} />
        </>
    )
}

export default page
