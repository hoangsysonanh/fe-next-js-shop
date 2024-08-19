'use client'
import React, { useState } from 'react'
import { Product } from '../../app/page';
import ProductCard from '../Product/ProductCard';
// const CarouSelProduct = ({ products }: { products: Array<Product> }) => {
    const CarouSelProduct = ({ products }: { products: Array<any> }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide = () => {
        if (currentSlide === 0) { setCurrentSlide(products.length - 4) }
        else { setCurrentSlide(currentSlide - 1) }
    }
    const nextSlide = () => {
        if (currentSlide === products.length - 4) { setCurrentSlide(0) }
        else { setCurrentSlide(currentSlide + 1) }
    }
    return (
        <>
            <div className="overflow-hidden relative">
                <div className='flex transition duration-500 ease-in-out'
                    style={{
                        transform: `translateX(-${currentSlide * 25}%)`
                    }}
                >
                    {/* {products.map((product: Product, index) => { */}
                    {products.map((product: any, index) => {
                        return (
                            // <ProductCard key={index} img={product.img} titleProduct={product.titleProduct} brand={product.brand}
                            //     price1={product.price1} price2={product.price2} sale={product.sale}
                            // />
                            <ProductCard key={product.class_code} img={product.img} titleProduct={product.class_name} brand={product.brand}
                            price1={product.course_price} price2={product.course_price} sale={product.course_discount}
                        />
                        )
                    })}
                </div>
                <div className='absolute top-0 flex items-center justify-between text-white w-full h-full'>
                    <div
                        onClick={prevSlide}
                        className='w-5 h-16 bg-[#BABABA] flex items-center align-middle justify-center cursor-pointer'>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.57612 14.2971C7.68123 14.4016 7.82341 14.4602 7.97162 14.4602C8.11982 14.4602 8.26201 14.4016 8.36712 14.2971L9.80012 12.8561C9.8517 12.8049 9.89264 12.744 9.92057 12.6769C9.94851 12.6097 9.96289 12.5378 9.96289 12.4651C9.96289 12.3924 9.94851 12.3204 9.92057 12.2533C9.89264 12.1862 9.8517 12.1253 9.80012 12.0741L5.18712 7.45609L9.80012 2.84709C9.8517 2.79588 9.89264 2.73496 9.92057 2.66785C9.94851 2.60075 9.96289 2.52878 9.96289 2.45609C9.96289 2.3834 9.94851 2.31143 9.92057 2.24433C9.89264 2.17722 9.8517 2.11631 9.80012 2.06509L8.36712 0.623091C8.26201 0.518607 8.11982 0.459961 7.97162 0.459961C7.82341 0.459961 7.68123 0.518607 7.57612 0.623091L1.13812 7.06909C1.08578 7.12039 1.0442 7.18162 1.01581 7.24918C0.98743 7.31675 0.97281 7.3893 0.97281 7.46259C0.97281 7.53588 0.98743 7.60843 1.01581 7.676C1.0442 7.74356 1.08578 7.80479 1.13812 7.85609L7.57612 14.2971Z" fill="white" />
                        </svg>
                    </div>
                    <div
                        onClick={nextSlide}
                        className='w-5 h-16 bg-[#BABABA] flex items-center align-middle justify-center cursor-pointer'>
                        <svg width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path transform="rotate(180 5 7.5)" d="M7.57612 14.2971C7.68123 14.4016 7.82341 14.4602 7.97162 14.4602C8.11982 14.4602 8.26201 14.4016 8.36712 14.2971L9.80012 12.8561C9.8517 12.8049 9.89264 12.744 9.92057 12.6769C9.94851 12.6097 9.96289 12.5378 9.96289 12.4651C9.96289 12.3924 9.94851 12.3204 9.92057 12.2533C9.89264 12.1862 9.8517 12.1253 9.80012 12.0741L5.18712 7.45609L9.80012 2.84709C9.8517 2.79588 9.89264 2.73496 9.92057 2.66785C9.94851 2.60075 9.96289 2.52878 9.96289 2.45609C9.96289 2.3834 9.94851 2.31143 9.92057 2.24433C9.89264 2.17722 9.8517 2.11631 9.80012 2.06509L8.36712 0.623091C8.26201 0.518607 8.11982 0.459961 7.97162 0.459961C7.82341 0.459961 7.68123 0.518607 7.57612 0.623091L1.13812 7.06909C1.08578 7.12039 1.0442 7.18162 1.01581 7.24918C0.98743 7.31675 0.97281 7.3893 0.97281 7.46259C0.97281 7.53588 0.98743 7.60843 1.01581 7.676C1.0442 7.74356 1.08578 7.80479 1.13812 7.85609L7.57612 14.2971Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouSelProduct