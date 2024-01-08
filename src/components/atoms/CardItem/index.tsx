import { Button } from 'antd';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import new1 from '@/assets/images/new-arrivals/new1.png';
import { LoveIcon } from '@/assets/svg';

import Star from '../Star';

interface CardItemProps {
  status?: string;
  discount?: string;
  title?: string;
  image?: StaticImageData;
  rate?: number;
  price?: string;
  id: number | string;
}

const CardItem = ({
  status = 'New',
  discount = '-50%',
  title = 'Table Lamp',
  image = new1 as any,
  rate = 5,
  price = '$24.99',
  id,
}: CardItemProps) => {
  return (
    <div className='group relative w-1/2 min-w-[165px] flex-1 md:w-[260px] md:flex-none'>
      <div className='relative flex flex-col gap-2 border-[3px] border-solid border-transparent bg-bgWhiteGray group-hover:rounded-[6px] group-hover:border-primary'>
        <div className='absolute left-4 top-4 flex flex-col gap-2'>
          <div className='w-fit rounded-md bg-white px-3 py-1 font-bold'>{status}</div>
          <div className='w-fit rounded-md bg-error px-3 py-1 font-bold text-white'>{discount}</div>
        </div>
        <button className='absolute right-4 top-4 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-white p-0 shadow-xl group-hover:flex'>
          <LoveIcon />
        </button>
        <Link href={`product/${id}`}>
          <Image
            priority
            src={image}
            alt='new1'
            width={100}
            height={100}
            className='h-auto w-full'
          />
        </Link>
        <Button
          type='primary'
          className='absolute bottom-4 left-1/2 hidden w-4/5 -translate-x-1/2 md:block'
        >
          Add to cart
        </Button>
      </div>
      <div className='mt-3'>
        <div>
          <Star rate={rate} />
        </div>
        <Link href={`product/${id}`} className='mb-1 text-base font-medium text-active'>
          {title}
        </Link>
        <p className='mb-0 text-sm font-semibold text-active'>{price}</p>
      </div>
      <Button type='primary' className='mb-4 mt-3 block w-4/5 text-sm md:hidden'>
        Add to cart
      </Button>
    </div>
  );
};

export default CardItem;
