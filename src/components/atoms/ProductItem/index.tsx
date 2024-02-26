import Image from 'next/image';
import React from 'react';

import Chair from '@/assets/images/new-arrivals/new2.png';
import { Hearth, LoveIcon, Star } from '@/assets/svg';
import { useCheckoutStore } from '@/stores/checkout-store';

interface Props {
  title: string;
  price: string;
  discount: string;
  rating: number;
  id: number | string;
}

const ProductItem = ({ id, title, discount, price, rating }: Props) => {
  const updateCartStore = useCheckoutStore((state) => state.updateCartStore);
  const handleAddcart = () => {
    const item = {
      status: 'new',
      discount: discount,
      title: title,
      image: Chair,
      rate: rating,
      price: price,
      id: id,
    };
    updateCartStore(item);
  };
  return (
    <div>
      <div>
        <div className=' group mb-2 bg-bgWhiteGray dark:bg-active'>
          <div className=' relative flex flex-col gap-2 border-[3px] border-solid border-transparent bg-bgWhiteGray transition duration-300 group-hover:rounded-[6px] group-hover:border-primary dark:bg-active'>
            <div className='flex justify-center'>
              <Image src={Chair} className='mb-[14px] mt-[34px]' alt='image' />
            </div>

            <div className='absolute left-5 top-5'>
              <div className='rounded-sm bg-white px-3 py-1 text-center font-semibold uppercase text-black dark:bg-black dark:text-white'>
                new
              </div>
              <div className='mt-2 flex items-center justify-center rounded-sm bg-error px-4 py-1 font-semibold uppercase text-white'>
                {discount}
              </div>
            </div>
            <button className='absolute right-4 top-4 hidden h-9 w-9 cursor-pointer items-center justify-center rounded-full border-0 bg-white p-0 text-active shadow-xl transition duration-300 group-hover:md:flex'>
              <LoveIcon />
            </button>
            <button
              className='absolute bottom-4 left-1/2 hidden h-[47px] w-11/12 -translate-x-1/2 rounded-[8px] border-0 !bg-bgPrimary text-[18.15px] text-white transition duration-300 group-hover:md:block'
              onClick={handleAddcart}
            >
              Add to cart
            </button>
          </div>
        </div>
        <div className='flex'>
          {Array(rating)
            .fill(0)
            .map((_, index) => {
              return (
                <span key={index}>
                  <Star />
                </span>
              );
            })}
        </div>

        <div className='flex justify-between'>
          <div className='mb-2 mt-1 text-[14px] font-medium text-bgDarkGray dark:text-white'>
            {title}
          </div>
          <div className='mr-2  md:hidden'>
            <Hearth />
          </div>
        </div>
        <div className='text-[14px] font-medium text-bgDarkGray dark:text-white'>${price}</div>
        <div className='my-2 text-[12px] text-gray md:hidden'>
          Super-soft cushion cover in off-white with a tactile pattern that enhances the different
          tones in the pile and base.li
        </div>
        <button className='h-[40px] w-full rounded-md border-0 bg-primary text-[14px] text-white md:hidden'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
