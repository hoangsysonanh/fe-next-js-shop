import React from 'react'
import { EContact } from '@/Interface';
import { User } from '../../app/page';
import Link from 'next/link';
import PrimaryButton from '../Button/PrimaryButton';
import SecondaryButton from '../Button/SecondaryButton';
import Image from 'next/image';

const CardUser = ({ user }: {
    user: User
}) => {
    return (
        <>
            <div className='w-[262px] h-[380px] shadow-md'>
                <div className='flex items-center justify-center rounded-full pt-6'>
                    <Image src={user.avt} alt={user.name}
                        width={143} height={143}
                        className='rounded-full' />
                </div>
                <div className='flex flex-col mt-4 items-center justify-center'>
                    <div>
                        <p className='font-normal text-2xl block'>{user.name}</p>
                    </div>
                    <div className='flex items-center justify-center mt-2 bg-white border border-black w-[109px] h-[28px] rounded-full'>
                        <span>
                            {user.userName}
                        </span>
                    </div>
                    <div className='flex mt-3 gap-2'>
                        {user.contact.map((contact, index) => {
                            switch (contact.type) {
                                case EContact.FACEBOOK:
                                    return (
                                        <Link href={contact.link} key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30">
                                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path>
                                            </svg>
                                        </Link>
                                    );
                                case EContact.TWITTER:
                                    return (
                                        <Link href={contact.link} key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 24 24">
                                                <path d="M21.634,4.031c-0.815,0.385-2.202,1.107-2.899,1.245c-0.027,0.007-0.049,0.016-0.075,0.023 c-0.813-0.802-1.927-1.299-3.16-1.299c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.218,0-5.568-1.679-7.327-3.837 C3.438,4.873,3.188,5.024,3.136,5.23C3.019,5.696,2.979,6.475,2.979,7.031c0,1.401,1.095,2.777,2.8,3.63 c-0.314,0.081-0.66,0.139-1.02,0.139c-0.424,0-0.912-0.111-1.339-0.335c-0.158-0.083-0.499-0.06-0.398,0.344 c0.405,1.619,2.253,2.756,3.904,3.087c-0.375,0.221-1.175,0.176-1.543,0.176c-0.136,0-0.609-0.032-0.915-0.07 c-0.279-0.034-0.708,0.038-0.349,0.582c0.771,1.167,2.515,1.9,4.016,1.928c-1.382,1.084-3.642,1.48-5.807,1.48 c-0.438-0.01-0.416,0.489-0.063,0.674C3.862,19.504,6.478,20,8.347,20C15.777,20,20,14.337,20,8.999 c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.589-0.425,1.491-1.163,1.947-1.728c0.155-0.192,0.03-0.425-0.181-0.352 c-0.543,0.189-1.482,0.555-2.07,0.625c1.177-0.779,1.759-1.457,2.259-2.21C22.109,4.168,21.895,3.907,21.634,4.031z"></path>
                                            </svg>
                                        </Link>
                                    );
                                case EContact.YOUTUBE:
                                    return (
                                        <Link href={contact.link} key={index}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 30 30">
                                                <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"></path>
                                            </svg>
                                        </Link>
                                    );
                                default:
                                    return null;
                            }

                        })}
                    </div>
                    <div className='mt-7'>
                        <button className='w-[144px] h-[48px] bg-black text-white uppercase font-medium text-[16px]'>
                            SHOP WITH ME
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardUser