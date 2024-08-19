import React from 'react'

const ThirdButton = ({ author }: { author: string }) => {
    return (
        <>
            <button className='min-w-[145px] h-[49px] px-4 bg-[#000000] text-white font-medium text-[16px] '>
                {author}
            </button>
        </>
    )
}

export default ThirdButton