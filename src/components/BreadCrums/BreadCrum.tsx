'use client'
import React from 'react'
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { BREADCRUMB } from '@/types/breadCrumb'

const BreadCrum: React.FC = () => {

  const router = useRouter()
  // const pathArray = router.asPath.split('/').filter((item) => item !== '')

  // const breadCrumbItems: BREADCRUMB[] = pathArray.map((item, index) => {
  //   const href = '/' + pathArray.slice(0, index + 1).join('/')
  //   return {
  //     label: item, href
  //   }
  // })
  const pathName = usePathname()
  // console.log(pathName);

  const pathArray = pathName.split('/').filter((item) => item !== '')
  // console.log(pathArray);

  const breadCrumbItems: BREADCRUMB[] =
    [
      { label: 'Home', href: '/' }
    ]
  pathArray.map((item, index) => {
    const href = '/' + pathArray.slice(0, index + 1).join('/')
    breadCrumbItems.push({ label: item, href })

  })
  console.log(breadCrumbItems)
  return (
    <>
      <nav className='flex items-baseline gap-4 mt-6 w-3/4 mx-auto'>
        {breadCrumbItems.length >= 1 && breadCrumbItems.map((item, index) => {
          return (
            <div className='flex gap-4 items-baseline'
            key={index}
            >
              <Link href={item.href}>
                <p className='font-normal text-xs uppercase'>{item.label}</p>
              </Link>
              {index < breadCrumbItems.length - 1 &&
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.90298 0.0850825C1.84826 0.030612 1.7742 3.14713e-05 1.69698 3.14713e-05C1.61977 3.14713e-05 1.54571 0.030612 1.49098 0.0850825L0.743985 0.836082C0.717166 0.862753 0.695884 0.894462 0.681361 0.929386C0.666839 0.964309 0.659363 1.00176 0.659363 1.03958C0.659363 1.0774 0.666839 1.11486 0.681361 1.14978C0.695884 1.1847 0.717166 1.21641 0.743985 1.24308L3.14398 3.64308L0.743985 6.04308C0.717166 6.06975 0.695884 6.10146 0.681361 6.13639C0.666839 6.17131 0.659363 6.20876 0.659363 6.24658C0.659363 6.2844 0.666839 6.32186 0.681361 6.35678C0.695884 6.3917 0.717166 6.42341 0.743985 6.45008L1.49098 7.20108C1.54571 7.25555 1.61977 7.28613 1.69698 7.28613C1.7742 7.28613 1.84826 7.25555 1.90298 7.20108L5.25598 3.84308C5.2828 3.81641 5.30409 3.7847 5.31861 3.74978C5.33313 3.71485 5.34061 3.67741 5.34061 3.63958C5.34061 3.60176 5.33313 3.56431 5.31861 3.52939C5.30409 3.49446 5.2828 3.46275 5.25598 3.43608L1.90298 0.0850825Z" fill="black" />
                </svg>}
            </div>
          )

        })}
      </nav>
    </>
  )
}

export default BreadCrum