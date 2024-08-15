import React from 'react'

const PrimaryButton = ({ author }: { author: string }) => {
    return (
        <>
            <button className='min-w-[65px] h-[24px] px-4 bg-[#000000] text-white '>
                {author}
            </button>
        </>
    )
}

export default PrimaryButton