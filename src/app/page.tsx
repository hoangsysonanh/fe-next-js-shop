'use client'
import CarousellBanner from "@/components/Carousell/CarousellBanner";
import CarouSelProduct from "@/components/Carousell/CarouSelProduct";
import CarouselUser from "@/components/Carousell/CarouselUser";
import DefaultLayout from "@/components/Layout/DefaultLayout";
import ListProducts from "@/components/Product/ListProducts";
import ListProductSecond from "@/components/Product/ListProductSecond";
import ProductCard from "@/components/Product/ProductCard";
import ProductCardSecond from "@/components/Product/ProductCardSecond";
import Section from "@/components/Section/Section";
import SectionBanner from "@/components/Section/SectionBanner";
import CardUser from "@/components/User/CardUser";
import Image from "next/image";
import { EContact } from "@/Interface";
import { useEffect, useState } from "react";
import axiosClient from "@/api/axiosClient";
export type Product = {
  img: string,
  titleProduct: string,
  brand: string,
  price1: string,
  price2: string,
  sale: string
}
export type Contact = {
  type: EContact | string,
  link: string
}

export type User = {
  avt: string,
  name: string,
  userName: string,
  contact: Array<Contact>
}


export default function Home() {

  const users: Array<User> = [
    {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    },
    {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    },
    {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    }
    ,
    {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    }
    , {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    }
    , {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    }, {
      avt: '/images/default-avt.png',
      name: 'Name',
      userName: 'UserName',
      contact: [
        {
          type: EContact.FACEBOOK,
          link: 'https://www.facebook.com/'
        },
        {
          type: EContact.TWITTER,
          link: 'https://twitter.com/'
        },
        {
          type: EContact.YOUTUBE,
          link: 'https://www.youtube.com/'
        }]
    }
  ]

  const slides: Array<string> = [
    '/images/slide-banner-1.png',
    '/images/slide-banner-2.png',
    '/images/slide-banner-3.png',
    '/images/slide-banner-4.png',
  ]
  const products: Array<Product> = [
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    },
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    },
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    },
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    },
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    },
    {
      img: '/images/img-product.png',
      titleProduct: 'Product Title Goes Here',
      brand: 'BRAND',
      price1: 'AED 32.00',
      price2: 'AED 32.00',
      sale: '30'
    }
  ]

  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get<any>('https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16')
        setData(res.data.data)
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchData()
    console.log(data);

  })

  return (
    <>
      <DefaultLayout>
        <div className="flex flex-col">
          <div className="w-[100%] mx-auto">
            <CarousellBanner slides={slides} />
          </div>
          <Section title="NEW ARRIVALS">
            <ListProductSecond>
              <ProductCardSecond />
              <div className="flex justify-between align-baseline">
                <ProductCard img="/images/img-product.png" titleProduct="Product Title Goes Here" brand="BRAND" price1="AED 32.00" price2="AED 32.00" sale="30" />
                <ProductCard img="/images/img-product.png" titleProduct="Product Title Goes Here" brand="BRAND" price1="AED 32.00" price2="AED 32.00" sale="30" />

              </div>
              <div className="flex justify-between align-baseline">
                <ProductCard img="/images/img-product.png" titleProduct="Product Title Goes Here" brand="BRAND" price1="AED 32.00" price2="AED 32.00" sale="30" />
                <ProductCard img="/images/img-product.png" titleProduct="Product Title Goes Here" brand="BRAND" price1="AED 32.00" price2="AED 32.00" sale="30" />
              </div>
              <ProductCardSecond />
            </ListProductSecond>
          </Section>
          <Section title="New Arrivals">
            <CarouSelProduct products={products} />
          </Section>
          <SectionBanner author="50% OFF" body="On All Items" />
          <Section title="New Arrivals">
            <CarouSelProduct products={products} />
          </Section>
          <SectionBanner author="35% OFF" body="All SKINCARE Items" />
          <Section title="AMBASSADORS">
            <div>
              <CarouSelProduct products={products} >
              </CarouSelProduct>
            </div>
          </Section>
          <Section title="render api">
            <CarouSelProduct products={data}/>
          </Section>
        </div>

      </DefaultLayout>
    </>
  );
}
