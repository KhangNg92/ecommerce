import Image from 'next/image';
import React from 'react';

import OfferBg from '@/assets/images/offer-bg.png';
import Time from '@/components/atoms/Time';

const Offers = () => {
  return (
    <div className='mb-10 flex flex-col-reverse gap-[60px] bg-bgWhiteGray pt-[60px] dark:bg-active md:mb-20 md:flex-row md:gap-[72px] md:pt-0'>
      <div className='w-full md:w-2/4'>
        <Image className='w-full object-cover' src={OfferBg} alt='bg' />
      </div>
      <div className='flex w-full flex-col justify-center gap-6 px-8 md:w-2/4 md:px-0 md:pr-40'>
        <div className='flex flex-col gap-4'>
          <h4 className='m-0 text-base font-bold uppercase text-primary'>Limited Edition</h4>
          <h2 className='m-0 text-[34px] font-medium tracking-[-0.4px] text-active dark:text-textDark md:text-[40px]'>
            Hurry up! 30% OFF
          </h2>
          <p className='m-0 max-w-[452px] text-sm text-active dark:text-textDark md:text-xl'>
            It’s more affordable than ever to give every room in your home a stylish makeover
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <p className='m-0 text-base text-active dark:text-textDark'>Offer expires in:</p>
          <div className='flex gap-4'>
            <Time value='02' label='Days' />
            <Time value='12' label='Hours' />
            <Time value='45' label='Minutes' />
            <Time value='05' label='Seconds' />
          </div>
        </div>

        <button className='h-10 max-w-[154px] cursor-pointer rounded-[8px] border-0 bg-primary py-[6px] text-center text-sm font-medium text-white md:text-base'>
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Offers;
