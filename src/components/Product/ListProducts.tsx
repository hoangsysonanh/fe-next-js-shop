import React from 'react'

const ListProducts = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-7  w-full h-auto'>
                {children}
            </div>
        </>
    )
}

export default ListProducts