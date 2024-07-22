import PaginationButtons from '@/components/products/PaginationButtons';
import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma';
import { redirect } from 'next/navigation';

const productsCount = async () => {
    return await prisma.product.count()
}
const getProducts = async (page: number, pageSize: number) => {
    const skip = (page - 1) * pageSize;

    const products = await prisma.product.findMany({
        include: { category: true },
        take: pageSize,
        skip
    });
    return products
};

export type ProductWithCategory = Awaited<ReturnType<typeof getProducts>>;

const page = async ({ searchParams }: { searchParams: { page: string } }) => {

    const page = +searchParams.page || 1
    const pageSize = 10;

    if(page  < 1 )redirect('/admin/products')

    const productsdata = getProducts(page, pageSize);
    const totalProductsdata = productsCount()
    const [products, totalProducts] = await Promise.all([productsdata, totalProductsdata]);

    const totalPages = Math.ceil(totalProducts / pageSize);
    if(page > totalPages) redirect('/admin/products')

    return (
        <>
            <Heading>
                Adminstrar tus productos
            </Heading>
            <ProductTable products={products} />
            <PaginationButtons page={page} totalPages={totalPages}/>
        </>
    )
}

export default page
