import React from 'react'
import ThirdButton from '../Button/ThirdButton'

const Form = () => {
    async function createForm(formData: FormData) {
        'use server'

        const rawFormData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            street: formData.get('street'),
            area: formData.get('area'),
            city: formData.get('city'),
        }
    }
    return (
        <>
            <div className='flex flex-col items-center py-11 bg-white'>
                <div className='flex gap-8 items-center justify-center align-middle'>
                    <div className='flex items-center justify-center gap-1 border border-black 2xl:w-[200px] h-[46px]'>
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3062 2.39844C24.3062 1.17773 23.3296 0.201172 22.1089 0.201172H2.58984C1.36914 0.201172 0.392578 1.17773 0.392578 2.39844V21.9175C0.392578 23.1382 1.36914 24.1147 2.58984 24.1147H22.1089C23.3296 24.1147 24.3062 23.1382 24.3062 21.9175V2.39844ZM21.9136 19.9644C21.9136 20.9409 21.1323 21.7222 20.1558 21.7222H4.53076C3.5542 21.7222 2.77295 20.9409 2.77295 19.9644V4.35156C2.77295 3.375 3.5542 2.59375 4.53076 2.59375H20.1558C21.1323 2.59375 21.9136 3.375 21.9136 4.35156V19.9644ZM7.59473 9.24658H10.3413C10.3901 8.20898 11.1348 7.5376 12.2578 7.5376C13.3564 7.5376 14.1011 8.16016 14.1011 9.03906C14.1011 9.93018 13.7227 10.3818 12.4409 11.1387C11.0859 11.9443 10.5366 12.7866 10.6709 14.3613L10.6831 14.8618H13.3442V14.3491C13.3442 13.4336 13.7104 12.9697 15.041 12.2129C16.4448 11.4072 17.1528 10.394 17.1528 8.95361C17.1528 6.69531 15.2852 5.15723 12.4287 5.15723C9.38916 5.15723 7.65576 6.80518 7.59473 9.24658ZM12.1235 19.5493C13.2466 19.5493 13.9424 18.9146 13.9424 17.877C13.9424 16.8271 13.2466 16.2046 12.1235 16.2046C11.0005 16.2046 10.2925 16.8271 10.2925 17.877C10.2925 18.9146 11.0005 19.5493 12.1235 19.5493Z" fill="black" />
                            </svg>
                        </div>
                        Resgiter with Facebook
                    </div>
                    <div className='flex items-center justify-center gap-1 border border-black 2xl:w-[200px] h-[46px]'>
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3062 2.39844C24.3062 1.17773 23.3296 0.201172 22.1089 0.201172H2.58984C1.36914 0.201172 0.392578 1.17773 0.392578 2.39844V21.9175C0.392578 23.1382 1.36914 24.1147 2.58984 24.1147H22.1089C23.3296 24.1147 24.3062 23.1382 24.3062 21.9175V2.39844ZM21.9136 19.9644C21.9136 20.9409 21.1323 21.7222 20.1558 21.7222H4.53076C3.5542 21.7222 2.77295 20.9409 2.77295 19.9644V4.35156C2.77295 3.375 3.5542 2.59375 4.53076 2.59375H20.1558C21.1323 2.59375 21.9136 3.375 21.9136 4.35156V19.9644ZM7.59473 9.24658H10.3413C10.3901 8.20898 11.1348 7.5376 12.2578 7.5376C13.3564 7.5376 14.1011 8.16016 14.1011 9.03906C14.1011 9.93018 13.7227 10.3818 12.4409 11.1387C11.0859 11.9443 10.5366 12.7866 10.6709 14.3613L10.6831 14.8618H13.3442V14.3491C13.3442 13.4336 13.7104 12.9697 15.041 12.2129C16.4448 11.4072 17.1528 10.394 17.1528 8.95361C17.1528 6.69531 15.2852 5.15723 12.4287 5.15723C9.38916 5.15723 7.65576 6.80518 7.59473 9.24658ZM12.1235 19.5493C13.2466 19.5493 13.9424 18.9146 13.9424 17.877C13.9424 16.8271 13.2466 16.2046 12.1235 16.2046C11.0005 16.2046 10.2925 16.8271 10.2925 17.877C10.2925 18.9146 11.0005 19.5493 12.1235 19.5493Z" fill="black" />
                            </svg>
                        </div>
                        Register with Google +
                    </div>
                    <div className='flex items-center justify-center gap-1 border border-black 2xl:w-[200px] h-[46px]'>
                        <div>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.3062 2.39844C24.3062 1.17773 23.3296 0.201172 22.1089 0.201172H2.58984C1.36914 0.201172 0.392578 1.17773 0.392578 2.39844V21.9175C0.392578 23.1382 1.36914 24.1147 2.58984 24.1147H22.1089C23.3296 24.1147 24.3062 23.1382 24.3062 21.9175V2.39844ZM21.9136 19.9644C21.9136 20.9409 21.1323 21.7222 20.1558 21.7222H4.53076C3.5542 21.7222 2.77295 20.9409 2.77295 19.9644V4.35156C2.77295 3.375 3.5542 2.59375 4.53076 2.59375H20.1558C21.1323 2.59375 21.9136 3.375 21.9136 4.35156V19.9644ZM7.59473 9.24658H10.3413C10.3901 8.20898 11.1348 7.5376 12.2578 7.5376C13.3564 7.5376 14.1011 8.16016 14.1011 9.03906C14.1011 9.93018 13.7227 10.3818 12.4409 11.1387C11.0859 11.9443 10.5366 12.7866 10.6709 14.3613L10.6831 14.8618H13.3442V14.3491C13.3442 13.4336 13.7104 12.9697 15.041 12.2129C16.4448 11.4072 17.1528 10.394 17.1528 8.95361C17.1528 6.69531 15.2852 5.15723 12.4287 5.15723C9.38916 5.15723 7.65576 6.80518 7.59473 9.24658ZM12.1235 19.5493C13.2466 19.5493 13.9424 18.9146 13.9424 17.877C13.9424 16.8271 13.2466 16.2046 12.1235 16.2046C11.0005 16.2046 10.2925 16.8271 10.2925 17.877C10.2925 18.9146 11.0005 19.5493 12.1235 19.5493Z" fill="black" />
                            </svg>
                        </div>
                        Register with Instagram
                    </div>
                </div>
                <div className='mt-10 mb-12 font-medium text-sm'>
                    OR
                </div>
                <div>
                    <form action={createForm}>
                        <div>
                            <label htmlFor="avatar"
                                className='flex flex-col items-center justify-center'>
                                <p className='font-medium text-lg mb-4'>Profile Picture</p>
                                <div>
                                    <input type="file" name="avatar"
                                        className='hidden' />
                                    <div>
                                        <img src="/images/upload-avt.png" alt="" className='cursor-pointer' />
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div>
                            <div>
                                <h2 className='font-medium text-lg mb-4'>Personal Details</h2>
                            </div>
                            <div className='grid 2xl:grid-cols-2 xl:grid-cols-1 gap-x-16'>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>First Name *</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Last Name *</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Email Address *</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Mobile Number *</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div>
                                <h2 className='font-medium text-lg mb-4'>Address</h2>
                            </div>
                            <div className='grid 2xl:grid-cols-2 xl:grid-cols-1 gap-x-16'>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Street</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Area</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>
                                <div className='mb-6'>
                                    <label htmlFor="firstName"
                                    >
                                        <div>Emirate</div>
                                        <input
                                            className='border border-black w-[300px] h-[45px] pl-2 mt-1'
                                            type="text"
                                        />
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-4'>
                            <div>
                                <ThirdButton author='Register' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form