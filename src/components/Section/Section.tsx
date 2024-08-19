import React from 'react'

const Section = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
        <>
            <div className='w-3/4 mx-auto pt-12'>
                <div className='flex justify-start  items-baseline gap-5 mb-12'>
                    <h2 className='font-medium text-3xl uppercase'>{title}</h2>
                    <h3 className='font-medium text-black text-base underline uppercase'>See All</h3>
                </div>
                {children}
            </div>
        </>
    )
}

export default Section