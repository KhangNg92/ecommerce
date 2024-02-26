import clsx from 'clsx';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import new1 from '@/assets/images/new-arrivals/new1.png';
import { LoveIcon } from '@/assets/svg';
// eslint-disable-next-line import/no-cycle
import { useCheckoutStore } from '@/stores/checkout-store';

import Star from '../Star';

export interface CardItemProps {
  status?: string;
  discount?: string;
  title?: string;
  image?: StaticImageData;
  rate?: number;
  price?: string;
  price_discount?: string;
  description?: string;
  id: number | string;
  quantity?: number;
  totalPrice?: number | string;
}

export interface CardDatItemProps {
  data: CardItemProps;
  isListView?: boolean;
}

const CardItem = ({
  data = {
    status: 'New',
    discount: '-50%',
    title: 'Table Lamp',
    image: new1,
    rate: 5,
    price: '$24.99',
    price_discount: '$55.33',
    description: '-',
    id: 0,
    quantity: 0,
    totalPrice: 0,
  },
  isListView,
}: CardDatItemProps) => {
  const updateCartStore = useCheckoutStore((state) => state.updateCartStore);
  const handleAddcart = () => {
    updateCartStore(data);
  };
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        pathname === '/'
          ? 'group relative min-w-[165px] flex-1 md:w-[260px] md:flex-none'
          : 'group relative w-1/2 min-w-[165px] flex-1 md:w-[260px] md:flex-none',
        isListView && 'flex h-auto flex-col md:h-[300px] md:w-[410px] md:flex-row',
      )}
    >
      <div
        className={clsx(
          'relative flex flex-col gap-2 border-[3px] border-solid border-transparent bg-bgWhiteGray group-hover:rounded-[6px] group-hover:border-primary',
          isListView && 'md:w-[205px]',
        )}
      >
        <div className='absolute left-4 top-4 flex flex-col gap-2'>
          <div className='rounded-sm bg-white px-3 py-1 text-center font-semibold uppercase text-black dark:bg-black dark:text-white'>
            {data?.status || 'New'}
          </div>
          <div className='mt-2 flex items-center justify-center rounded-sm bg-error px-4 py-1 font-semibold uppercase text-white'>
            {data?.discount || '50%'}
          </div>
        </div>
        {!isListView && (
          <button className='absolute right-4 top-4 hidden h-9 w-9 !cursor-pointer items-center justify-center rounded-full border-0 bg-white p-0 text-black shadow-xl hover:text-red-500  group-hover:flex'>
            <LoveIcon />
          </button>
        )}
        <Link href={`product/${data?.id}`} className='cursor-default'>
          <Image
            priority
            src={data?.image || new1}
            alt='image'
            width={100}
            height={100}
            className={clsx(
              pathname === '/' ? 'min-h-[349px] w-full' : 'min-h-[203px] w-full md:min-h-[349px]',
              isListView && 'md:!min-h-[300px]',
            )}
          />
        </Link>

        {!isListView && (
          <button
            onClick={handleAddcart}
            className={clsx(
              pathname === '/'
                ? 'absolute bottom-4 left-1/2 hidden h-[47px] w-11/12 -translate-x-1/2 !cursor-pointer rounded-[8px] border-0 !bg-bgPrimary text-[18.15px] text-white transition duration-300 hover:!bg-blue-800 group-hover:md:block'
                : 'absolute bottom-4 left-1/2 hidden h-[47px] w-4/5 -translate-x-1/2 !cursor-pointer rounded-[8px] border-0 !bg-bgPrimary text-white hover:!bg-blue-800 group-hover:md:block',
            )}
          >
            Add to cart
          </button>
        )}
      </div>
      <div className={clsx('mt-3', isListView && '!mt-0 w-full p-3 md:w-1/2')}>
        <div className={clsx(isListView && 'mb-4')}>
          <Star rate={data?.rate || 5} />
        </div>
        <Link
          href={`product/${data?.id}`}
          className='mb-2 mt-1 !cursor-default text-[14px] font-medium text-active dark:text-white'
        >
          {data?.title}
        </Link>

        <div className='mb-4 flex items-center gap-3'>
          <p className='mb-0 text-sm font-semibold text-active dark:text-white'>
            {data?.price_discount}
          </p>
          <p className='mb-0 text-sm font-semibold text-gray line-through'>{data?.price}</p>
        </div>
        {isListView && <p className='mb-6 line-clamp-3 text-sm text-gray'>{data?.description}</p>}
        {isListView && (
          <>
            <button
              onClick={handleAddcart}
              className='border-1 lig w-full !cursor-pointer rounded-[8px] border-blue-900 text-sm text-[#2B85FF] hover:bg-blue-500 hover:text-white dark:text-white'
            >
              Add to cart
            </button>
            <button className='m-auto mt-3 flex !cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 hover:text-red-500 group-hover:flex'>
              <div className='flex h-9 w-9 items-center justify-center '>
                <LoveIcon />
              </div>
              <span>Wishlist</span>
            </button>
          </>
        )}
      </div>
      <button
        onClick={handleAddcart}
        className={clsx(
          'border-1 mb-4 mt-3 block w-full !cursor-pointer rounded-[8px] border-blue-900 text-sm text-[#2B85FF] hover:bg-blue-500 hover:text-white dark:text-white md:hidden md:w-4/5',
          isListView && 'hidden',
        )}
      >
        Add to cart
      </button>
    </div>
  );
};

export default CardItem;
