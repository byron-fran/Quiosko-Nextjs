import Link from "next/link"
import { FC } from "react"

interface PaginationButtonsProps {
    page: number,
    totalPages: number
}
const PaginationButtons: FC<PaginationButtonsProps> = ({ page, totalPages }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
    return (
        <nav className="flex justify-center mt-5">
            {page > 1 && (
                <Link
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                    href={`/admin/products?page=${page - 1}`}>
                    &laquo;

                </Link>
            )}
            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    className={`${currentPage === page && 'font-bold'}  bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                    href={`/admin/products?page=${currentPage}`}
                >
                    {currentPage}
                </Link>
            ))}
            {page < totalPages && (

                <Link
                    className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                    href={`/admin/products?page=${page + 1}`}>
                    &raquo;
                </Link>
            )}
        </nav>
    )
}

export default PaginationButtons
