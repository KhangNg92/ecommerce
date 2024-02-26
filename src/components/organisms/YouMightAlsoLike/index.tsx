'use client';
import './styles.scss';

import Link from 'next/link';
import { Slide } from 'react-slideshow-image';

import prod1 from '@/assets/images/products/product-1.png';
import prod2 from '@/assets/images/products/product-2.png';
import prod3 from '@/assets/images/products/product-3.png';
import prod4 from '@/assets/images/products/product-4.png';
import prod5 from '@/assets/images/products/product-5.png';
import prod6 from '@/assets/images/products/product-6.png';
import prod7 from '@/assets/images/products/product-7.png';
import prod8 from '@/assets/images/products/product-8.png';
import prod9 from '@/assets/images/products/product-9.png';
import prod10 from '@/assets/images/products/product-10.png';
import prod11 from '@/assets/images/products/product-11.png';
import prod12 from '@/assets/images/products/product-12.png';
import { LeftOutlined, RightOutlined } from '@/assets/svg';
import { ArrowRight } from '@/assets/svg/ArrowRight';
import CardItem from '@/components/atoms/CardItem';

const prodList = [
  {
    id: 1,
    image: prod1,
  },
  {
    id: 2,
    image: prod2,
  },
  {
    id: 3,
    image: prod3,
  },
  {
    id: 4,
    image: prod4,
  },
  {
    id: 5,
    image: prod5,
  },
  {
    id: 6,
    image: prod6,
  },
  {
    id: 7,
    image: prod7,
  },
  {
    id: 8,
    image: prod8,
  },
  {
    id: 9,
    image: prod9,
  },
  {
    id: 10,
    image: prod10,
  },
  {
    id: 11,
    image: prod11,
  },
  {
    id: 12,
    image: prod12,
  },
];

const responsiveSettings = [
  {
    breakpoint: 1120,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];
export default function YouMightAlsoLike() {
  return (
    <div className='you-might-also-like py-12'>
      <div className='flex items-center justify-between'>
        <h4 className={'text-[28px] leading-8 text-title'}>You might also like</h4>
        <Link href={'#'} className='hidden md:block'>
          <div className='link-more flex gap-1 py-1'>
            <span className='text-base font-normal text-title'>More Products</span>
            <ArrowRight />
          </div>
        </Link>
      </div>
      <div className='py-12'>
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={false}
          autoplay={false}
          responsive={responsiveSettings}
          prevArrow={
            <div className='hidden md:block'>
              <LeftOutlined />
            </div>
          }
          nextArrow={
            <div className='hidden md:block'>
              <RightOutlined />
            </div>
          }
        >
          {prodList.map((item, index) => (
            <div key={item.id} className='flex'>
              <CardItem key={item.id} data={item} />
              {index % 2 !== 0 && <div className='min-w-[6px]' />}
            </div>
          ))}
        </Slide>
      </div>
      <Link href={'#'} className='block w-fit md:hidden'>
        <div className='link-more flex gap-1 py-1'>
          <span className='text-base font-normal text-title'>More Products</span>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
}
