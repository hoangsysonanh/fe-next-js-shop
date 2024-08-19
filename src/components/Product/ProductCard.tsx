import React from 'react'
import Image from 'next/image';
import PrimaryButton from '../Button/PrimaryButton';

const ProductCard = ({ img, titleProduct, brand, price1, price2, sale }: {
    img: string,
    titleProduct: string,
    brand: string,
    price1: string,
    price2: string,
    sale: string
}) => {
    return (
        <>
            <div className='mb-8 w-[100%] mr-7'>
                <div className='w-full md:w-[]  2xl:w-[262px] bg-[#E3E3E3]'>
                    <div className='relative items-center align-middle justify-center 2xl:w-[262px] 2xl:h-[250px] bg-[#E3E3E3]'>
                        <div>
                            <Image src={img} alt='img-product' width={262} height={250} />
                            <div className='absolute bottom-5 left-5'>
                                <PrimaryButton author='Buy Now' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white py-2'>
                        <div className='mx-4'>
                            <p className='text-lg font-medium truncate whitespace-nowrap'>{titleProduct}</p>
                            <span className='text-sm font-normal'>{brand}</span>
                        </div>
                        <div className='flex items-center justify-between mx-4 mt-2 gap-2'>
                            <div className='flex gap-2'>
                                <span className='line-through text-[#C4C4C4] text-sm font-medium'>{price1}</span>
                                <span className='font-medium text-sm '>{price2}</span>
                            </div>
                            <div>
                                <button className='bg-white border border-black px-2'>
                                    {sale} Off
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCard