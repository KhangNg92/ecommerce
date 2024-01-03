import Image from 'next/image';
import React from 'react';

import Chair from '@/assets/images/new-arrivals/new2.png';
import { Hearth, Star } from '@/assets/svg';

interface Props {
  name: string;
  price: string;
  discount: string;
  rating: number;
}

const ProductItem = ({ name, discount, price, rating }: Props) => {
  return (
    <div>
      <div>
        <div className=' mb-2 bg-bgWhiteGray '>
          <div className=' relative flex justify-center'>
            <Image src={Chair} className='mb-[14px] mt-[34px]' alt='image' />
            <div className='absolute left-5 top-5'>
              <div className=' rounded-sm bg-white px-3 py-1 text-center font-semibold uppercase text-black'>
                new
              </div>
              <div className='mt-2 flex items-center justify-center rounded-sm bg-error px-4 py-1 font-semibold uppercase text-white'>
                {discount}
              </div>
            </div>
          </div>
        </div>
        {Array(rating)
          .fill(0)
          .map((_, index) => {
            return (
              <span key={index}>
                <Star />
              </span>
            );
          })}

        <div className='flex justify-between'>
          <div className='mb-2 mt-1 text-[14px] font-medium text-bgDarkGray'>{name}</div>
          <div className='mr-2  md:hidden'>
            <Hearth />
          </div>
        </div>
        <div className='text-[14px] font-medium text-bgDarkGray'>${price}</div>
        <div className='my-2 text-[12px] text-gray md:hidden'>
          Super-soft cushion cover in off-white with a tactile pattern that enhances the different
          tones in the pile and base.
        </div>
        <button className='h-[40px] w-full rounded-md border-none bg-primary text-[14px] text-white md:hidden'>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
