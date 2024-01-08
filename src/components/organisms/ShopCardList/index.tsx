'use client';
import React, { useState } from 'react';

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
import CardItem from '@/components/atoms/CardItem';

const ShopCardList = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  return (
    <div className='flex flex-col flex-wrap gap-2 px-5 py-10 md:gap-6'>
      <div className='flex flex-wrap gap-2 px-5 md:gap-6'>
        <CardItem image={prod1} />
        <CardItem image={prod2} />
        <CardItem image={prod3} />
        <CardItem image={prod4} />
        <CardItem image={prod5} />
        <CardItem image={prod6} />
        <CardItem image={prod7} />
        <CardItem image={prod8} />
        <CardItem image={prod9} />
      </div>
      {isLoadMore && (
        <div className='flex flex-wrap gap-2 px-5 md:gap-6'>
          <CardItem image={prod10} />
          <CardItem image={prod11} />
          <CardItem image={prod12} />
        </div>
      )}
      <button
        onClick={() => setIsLoadMore(!isLoadMore)}
        className='mx-auto h-10 w-[163px] rounded-full border-solid border-active bg-transparent text-center font-medium text-active'
      >
        {isLoadMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ShopCardList;
