import React from 'react'

const SearchBar = () => {
    return (
        <form className='flex items-center gap-2'>
            <input type="text" name='search' className='bg-gray-200  p-2 w-full md:w-auto' />
            <input type="submit" value='Buscar' className='bg-indigo-600 text-white p-2' />
        </form>
    )
}

export default SearchBar
