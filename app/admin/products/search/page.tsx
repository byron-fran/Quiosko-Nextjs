import SearchBar from '@/components/admin/SearchBar';
import ProductTable from '@/components/products/ProductsTable';
import Heading from '@/components/ui/Heading'
import { prisma } from '@/src/lib/prisma'

const searchProducts = async (searchTerm: string) => {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: { category: true }
    });
    return products

}

const SearchPage = async ({ searchParams }: { searchParams: { search: string } }) => {

    const products = await searchProducts(searchParams.search)

    return (
        <>
            <Heading>
                Resultados de búsquedas: {searchParams.search}
            </Heading>
            <div className='flex flex-col gap-5 p-5 items-center md:flex-row md:justify-end'>
                <SearchBar />
            </div>
            {products.length ? (

                <ProductTable products={products} />
            ): <p className='text-center font-bold'>No hay resultados</p>}
        </>
    )
}

export default SearchPage
