'use client';
import clsx from 'clsx';
import React from 'react';

import { ArrowBlackIcon } from '@/assets/svg';
import ProductItem from '@/components/atoms/ProductItem';

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

const listProductItem = [
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-50%',
    rating: 5,
  },
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-25%',
    rating: 4,
  },
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-40%',
    rating: 3,
  },
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-35%',
    rating: 2,
  },
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-45%',
    rating: 5,
  },
  {
    name: 'Table Lamp',
    price: '24.99',
    discount: '-45%',
    rating: 5,
  },
];

const Products = () => {
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
          <ul className='border-gray-100 bg-gray-50  mt-4 flex list-none  rounded-lg border p-0 font-medium md:mt-0  md:flex-row md:border-0 md:bg-white'>
            {listNav.map((nav, index) => {
              return (
                <li
                  onClick={() => setNameNav(index)}
                  key={index}
                  className={clsx(
                    'cursor-pointer rounded-full border-[1px] p-2 text-center text-[14px] text-gray hover:border-solid hover:text-bgDarkGray md:w-[100px] md:px-3 md:py-2',
                    nameNav === index &&
                      'mx-2 rounded-full border-[1px] border-solid border-bgDarkGray p-2 text-center text-[14px] text-bgDarkGray md:w-[100px] md:px-3 md:py-2',
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
        {listProductItem.map((productCard, index) => {
          return (
            <div key={index}>
              <ProductItem {...productCard} />
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
