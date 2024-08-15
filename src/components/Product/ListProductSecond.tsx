import React from 'react'

const ListProductSecond = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="grid md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-7 w-full h-auto">
                {children}
            </div>
        </>
    )
}

export default ListProductSecond