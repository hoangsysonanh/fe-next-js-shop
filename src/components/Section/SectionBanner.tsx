import Image from 'next/image'
import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'

const SectionBanner = ({ author, body }: { author: string, body: string }) => {
    return (
        <>
            <div className='flex items-center justify-around w-3/4 mx-auto h-[177px] bg-[#E3E3E3] mt-12'>
                <div className="">
                    <Image src={'/images/banner.png'} alt='img-banner' width={116} height={85} />
                </div>
                <div className='flex items-center justify-between gap-14 '>
                    <div>
                        <p className="font-bold text-[51px] ">{author}</p>
                        <p className='font-light text-2xl'>{body}</p>
                    </div>
                    <div>
                        <SecondaryButton author='Shop Now' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionBanner