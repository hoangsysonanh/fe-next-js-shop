import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import Image from 'next/image'

const ProductCardSecond = () => {
    return (
        <>
            <div className='mb-8 w-full'>
                <div className='relative 2xl:w-[557px] 2xl:h-full bg-[#e3e3e3]   md:'>
                    <div className='flex justify-center items-center'>
                        <div>
                            <Image src={'/images/img-product.png'} className='w-[350px] h-auto' alt={''} width={570} height={350} />
                        </div>
                        <div className='absolute bottom-8 left-1/3'>
                            <SecondaryButton author='Shop Now' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCardSecond