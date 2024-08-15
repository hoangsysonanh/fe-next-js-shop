'use client'
import { transform } from 'next/dist/build/swc'
import Image from 'next/image'
import React, { useState } from 'react'

const CarousellBanner = ({ slides }: { slides: Array<string> }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        if (currentSlide === 0) { setCurrentSlide(slides.length - 1) }
        else { setCurrentSlide(currentSlide - 1) }
    }
    const nextSlide = () => {
        if (currentSlide === slides.length - 1) { setCurrentSlide(0) }
        else { setCurrentSlide(currentSlide + 1) }
    }

    return (

        <>
            <div className='overflow-hidden relative'>
                <div className='flex transition duration-500 ease-in-out '
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`
                    }}>
                    {slides.map((slide,index) => {
                        return <Image key={index} src={slide} alt='img-banner' className='w-full' />
                    })}
                </div>
                <div className='absolute top-0 flex items-center justify-between text-white w-full h-full'
                    onClick={prevSlide}
                >
                    <div className='w-8 h-24 bg-[#BABABA] flex items-center align-middle justify-center cursor-pointer'>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.57612 14.6721C7.68123 14.7766 7.82341 14.8352 7.97162 14.8352C8.11982 14.8352 8.26201 14.7766 8.36712 14.6721L9.80012 13.2311C9.8517 13.1799 9.89264 13.119 9.92057 13.0519C9.94851 12.9847 9.96289 12.9128 9.96289 12.8401C9.96289 12.7674 9.94851 12.6954 9.92057 12.6283C9.89264 12.5612 9.8517 12.5003 9.80012 12.4491L5.18712 7.83109L9.80012 3.22209C9.8517 3.17088 9.89264 3.10996 9.92057 3.04285C9.94851 2.97575 9.96289 2.90378 9.96289 2.83109C9.96289 2.7584 9.94851 2.68643 9.92057 2.61933C9.89264 2.55222 9.8517 2.49131 9.80012 2.44009L8.36712 0.998091C8.26201 0.893607 8.11982 0.834961 7.97162 0.834961C7.82341 0.834961 7.68123 0.893607 7.57612 0.998091L1.13812 7.44409C1.08578 7.49539 1.0442 7.55662 1.01581 7.62418C0.98743 7.69175 0.97281 7.7643 0.97281 7.83759C0.97281 7.91088 0.98743 7.98343 1.01581 8.051C1.0442 8.11856 1.08578 8.17979 1.13812 8.23109L7.57612 14.6721Z" fill="white" />
                        </svg>
                    </div>
                    <div className='w-8 h-24 bg-[#BABABA] flex items-center align-middle justify-center cursor-pointer'
                        onClick={nextSlide}
                    >
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path transform="rotate(180 5 7.5)" d="M7.57612 14.6721C7.68123 14.7766 7.82341 14.8352 7.97162 14.8352C8.11982 14.8352 8.26201 14.7766 8.36712 14.6721L9.80012 13.2311C9.8517 13.1799 9.89264 13.119 9.92057 13.0519C9.94851 12.9847 9.96289 12.9128 9.96289 12.8401C9.96289 12.7674 9.94851 12.6954 9.92057 12.6283C9.89264 12.5612 9.8517 12.5003 9.80012 12.4491L5.18712 7.83109L9.80012 3.22209C9.8517 3.17088 9.89264 3.10996 9.92057 3.04285C9.94851 2.97575 9.96289 2.90378 9.96289 2.83109C9.96289 2.7584 9.94851 2.68643 9.92057 2.61933C9.89264 2.55222 9.8517 2.49131 9.80012 2.44009L8.36712 0.998091C8.26201 0.893607 8.11982 0.834961 7.97162 0.834961C7.82341 0.834961 7.68123 0.893607 7.57612 0.998091L1.13812 7.44409C1.08578 7.49539 1.0442 7.55662 1.01581 7.62418C0.98743 7.69175 0.97281 7.7643 0.97281 7.83759C0.97281 7.91088 0.98743 7.98343 1.01581 8.051C1.0442 8.11856 1.08578 8.17979 1.13812 8.23109L7.57612 14.6721Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='absolute bottom-0 flex items-center justify-center w-full  gap-3 py-6'>
                    {slides.map((slide, index) => {
                        return (
                            <div key={index}
                                onClick={() => {
                                    setCurrentSlide(index)
                                }}
                                className={`rounded-full w-3 h-3 cursor-pointer ${index === currentSlide ? "bg-[#5F5F5F]" : "bg-white border border-black"  }`}></div>
                        )
                    })}
                </div>

            </div >
        </>
    )
}

export default CarousellBanner