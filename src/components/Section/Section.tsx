import Link from 'next/link'
import React from 'react'

const Section = ({ title, children, seeAll }: { title?: string, seeAll?: boolean, children: React.ReactNode }) => {
    return (
        <>
            <div className='w-3/4 mx-auto pt-12'>
                <div className='flex justify-start  items-baseline gap-5'>
                    <h2 className='font-medium text-3xl uppercase'>{title}</h2>
                    {seeAll &&
                        <Link href={'/'} className='font-medium text-black text-base underline uppercase'>See All </Link>}
                </div>
                {children}
            </div>
        </>
    )
}

export default Section