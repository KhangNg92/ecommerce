'use client';
import clsx from 'clsx';
import React from 'react';

import { ArrowBlackIcon } from '@/assets/svg';
import CardItem from '@/components/atoms/CardItem';

import { tempData } from '../ShopCardList';

const listNav = [
  {
    name: 'Best Seller',
    src: '#',
  },
  {
    name: 'Chair',
    src: '#',
  },
  {
    name: 'Table',
    src: '#',
  },
  {
    name: 'Bed',
    src: '#',
  },
  {
    name: 'Closet',
    src: '#',
  },
];

const Products = () => {
  const DEFAULT_LIMIT = 7;
  const [nameNav, setNameNav] = React.useState(1);

  return (
    <div className='pb m-auto flex w-full max-w-screen-xl flex-col gap-2 px-5 pt-6 md:gap-3 md:px-40 md:pt-16'>
      <div className='flex flex-col justify-between md:flex-row'>
        <div>
          <h1>
            Crafted with
            <br /> excellent material
          </h1>
        </div>
        <div className=' flex w-full items-center justify-between md:order-1 md:w-auto '>
          <ul className='border-gray-100 bg-gray-50  mt-4 flex list-none  rounded-lg border p-0 font-medium md:mt-0  md:flex-row md:border-0 md:bg-white md:dark:bg-bgDark'>
            {listNav.map((nav, index) => {
              return (
                <li
                  onClick={() => setNameNav(index)}
                  key={index}
                  className={clsx(
                    'cursor-pointer rounded-full border-[1px] p-2 text-center text-[14px] text-gray hover:border-solid hover:text-bgDarkGray hover:dark:text-white md:w-[100px] md:px-3 md:py-2',
                    nameNav === index &&
                      'mx-2 rounded-full border-[1px] border-solid border-bgDarkGray p-2 text-center text-[14px] text-bgDarkGray dark:border-white dark:text-white md:w-[100px] md:px-3 md:py-2',
                  )}
                >
                  <a>{nav.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='mt-5 grid gap-4 md:grid-cols-4'>
        {tempData.slice(0, DEFAULT_LIMIT).map((productCard, index) => {
          return (
            <div key={index}>
              <CardItem data={productCard} />
            </div>
          );
        })}
      </div>
      <div className='mb-4 mt-7 flex cursor-pointer items-center justify-center text-center'>
        See all our products <ArrowBlackIcon />
      </div>
    </div>
  );
};
export default Products;
