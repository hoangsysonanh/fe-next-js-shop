import React from 'react'

const SecondaryButton = ({ author }: { author: string }) => {
    return (
        <>
            <button className=' min-w-[160px] py-5 bg-white border border-black font-medium text-base'>
                {author}
            </button>
        </>
    )
}

export default SecondaryButton