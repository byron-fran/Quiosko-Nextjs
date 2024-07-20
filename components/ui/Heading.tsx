import React from 'react'

const Heading = ({children}: Readonly<{children: React.ReactNode;}>) => {
    return (
        <h2 className='my-10 text-2xl'>
            {children}
        </h2>
    )
}

export default Heading
