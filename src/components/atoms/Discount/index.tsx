import React from 'react';

import { ArrowIcon, CloseIcon, DiscountIcon } from '@/assets/svg';

const Discount = () => {
  return (
    <div className='relative flex w-full items-center justify-center gap-2 bg-bgWhiteGray px-8 py-2 md:px-4'>
      <div className='flex items-center gap-3'>
        <DiscountIcon />
        <div className='flex items-baseline gap-2'>
          <span className='text-black'>
            <span className='text-xs md:text-sm'>30% off storewide</span>
            <span className='hidden text-xs text-black md:inline md:text-sm'> — Limited time!</span>
          </span>
          <button className='flex cursor-pointer items-center gap-1 border-0 border-b-2 border-solid border-primary bg-transparent p-0 text-xs text-primary md:text-sm'>
            Shop Now <ArrowIcon />
          </button>
        </div>
      </div>
      <button className='right-2 h-5 w-5 cursor-pointer border-0 bg-transparent p-0 md:absolute'>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Discount;
