'use client';
import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

import new1 from '@/assets/images/new-arrivals/new1.png';

const NewArrivals = () => {
  return (
    <div className='px-4'>
      <div>
        <div className='my-4 w-20 text-4xl font-medium text-bgDarkGray'>New Arrivals</div>
        <div className='relative h-72 w-[230px] bg-bgWhiteGray'>
          <div className='flex flex-col gap-2'>
            <div className='absolute left-4 top-4 flex flex-col gap-2'>
              <div className='w-fit rounded-md bg-white px-3 py-1 font-bold'>New</div>
              <div className='w-fit rounded-md bg-error px-3 py-1 font-bold text-white'>-50%</div>
            </div>
            <Image src={new1} alt='new1' width={100} height={100} className='h-auto w-full' />
            <Button type='primary' className='absolute bottom-4 left-1/2 w-4/5 -translate-x-1/2'>
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
