'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

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
import {
  GridViewDarkMode,
  GridViewLightMode,
  ListViewDarkMode,
  ListViewLightMode,
} from '@/assets/svg';
import CardItem from '@/components/atoms/CardItem';

export const tempData = [
  {
    id: 1,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod1,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description:
      'Super-soft cushion cover in off-white with a tactile pattern that and supper cool...',
  },
  {
    id: 2,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod2,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 3,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod3,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 4,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod4,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 5,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod5,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 6,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod6,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 7,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod7,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 8,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod8,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 9,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod9,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 10,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod10,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 11,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod11,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
  {
    id: 12,
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: prod12,
    rate: 5,
    price_discount: '$199.00',
    price: '$400.00',
    description: 'Super-soft cushion cover in off-white with a tactile pattern that enh...',
  },
];

const ShopCardList = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const DEFAULT_LIMIT = 9;
  const [limitItem, setLimitItem] = useState(DEFAULT_LIMIT);
  const [isListView, setIsListView] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLightTheme(theme === 'light');
  }, [theme]);

  return (
    <div className='flex flex-col flex-wrap gap-2 px-5 py-10 md:gap-6 md:pl-6 md:pr-[160px]'>
      <div className='flex items-center justify-between'>
        <p className='m-0 text-2xl tracking-[-0.4px] text-black dark:text-white'>
          {tempData?.length} {tempData?.length > 1 ? 'Results' : 'Result'}
        </p>
        <div className={clsx('flex items-center', isLightTheme ? 'bg-bgWhite' : 'bg-title')}>
          <button
            onClick={() => setIsListView(false)}
            className='flex h-10 w-[46px] cursor-pointer items-center justify-center border-[1px] border-r-0 border-solid border-black bg-transparent px-3 py-2'
          >
            {isLightTheme ? (
              <GridViewLightMode fill={isListView ? '#6F767E' : '#1F2224'} />
            ) : (
              <GridViewDarkMode fill={isListView ? '#6F767E' : '#F4F4F4'} />
            )}
          </button>
          <button
            onClick={() => setIsListView(true)}
            className='flex h-10 w-[46px] cursor-pointer items-center justify-center border-[1px] border-solid border-black bg-transparent px-3 py-2'
          >
            {isLightTheme ? (
              <ListViewLightMode fill={!isListView ? '#6F767E' : '#1F2224'} />
            ) : (
              <ListViewDarkMode fill={!isListView ? '#6F767E' : '#F4F4F4'} />
            )}
          </button>
        </div>
      </div>
      <div className='flex flex-wrap gap-2 md:gap-6'>
        {tempData.slice(0, limitItem).map((item) => (
          <CardItem data={item} key={item.id} isListView={isListView} />
        ))}
      </div>
      <button
        onClick={() => {
          setIsLoadMore(!isLoadMore);
          if (!isLoadMore) {
            setLimitItem(tempData.length);
          } else {
            setLimitItem(DEFAULT_LIMIT);
          }
        }}
        className='mx-auto h-10 w-[163px] rounded-full border-solid border-active bg-transparent text-center font-medium text-active'
      >
        {isLoadMore ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ShopCardList;
