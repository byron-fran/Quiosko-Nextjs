"use client"
import { SearchBarSchema } from '@/src/schema'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'


const SearchBar = () => {

    const router = useRouter()
    
    const handleSearch = (formData: FormData) => {

        const data = {
            search: formData.get('search')
        }
        const result = SearchBarSchema.safeParse(data);
        if (!result.success) {
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        };
        router.push(`/admin/products/search?search=${result.data.search}`)

    }
    return (
        <form action={handleSearch} className='flex items-center gap-2'>
            <input type="text" name='search' className='bg-gray-200  p-2 w-full md:w-auto' />
            <input type="submit" value='Buscar' className='bg-indigo-600 text-white p-2' />
        </form>
    )
}

export default SearchBar
