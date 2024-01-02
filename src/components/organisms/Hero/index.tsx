import Image from 'next/image';
import React from 'react';

import HeroBg from '@/assets/images/bg-hero.png';
import {
  ConfortIcon,
  ExploreIcon,
  FreeShippingIcon,
  PlayIcon,
  QualityAssuranceIcon,
  SecureCheckoutIcon,
} from '@/assets/svg';

import CustomSlider from './CustomSlider';

const heroText = {
  title: 'Perfect Harmony: Comfort & Style',
  decs: 'Explore furniture that harmoniously combines comfort and style to elevate your home',
};

const offers = [
  {
    name: 'Confort',
    desc: 'Cozy Seating',
    icon: <ConfortIcon />,
    highlight: true,
  },
  {
    name: 'Quality Assurance',
    desc: 'Cozy Seating',
    icon: <QualityAssuranceIcon />,
    highlight: true,
  },
  {
    name: 'Free Shipping',
    desc: 'No-Cost Delivery',
    icon: <FreeShippingIcon />,
    highlight: true,
  },
  {
    name: '',
    desc: '',
    icon: '',
    highlight: false,
  },
  {
    name: 'Secure Checkout',
    desc: 'Secure Payments',
    icon: <SecureCheckoutIcon />,
    highlight: false,
  },
];

const Hero = () => {
  return (
    <div className='relative m-auto mb-10 flex h-[630px] w-full max-w-screen-xl flex-col-reverse justify-end gap-8 overflow-hidden px-0 md:mb-0 md:h-[749px] md:flex-row md:justify-between md:gap-16 md:px-40'>
      <div className='w-full px-5 md:w-2/4 md:px-0'>
        <h2 className='mb-4 max-w-[340px] text-[40px] font-semibold leading-[44px] tracking-[0.4px] text-black md:mb-5 md:max-w-[508px] md:text-6xl md:leading-[72px]'>
          {heroText.title}
        </h2>
        <p className='mb-4 text-sm leading-[22px] text-gray md:mb-5 md:text-xl md:leading-7'>
          {heroText.decs}
        </p>
        <div className='flex items-center gap-4 md:mb-[50px]'>
          <button className='flex h-[46px] max-w-[200px] cursor-pointer items-center gap-[11px] rounded-[24px] border-[1.2px] border-solid border-black bg-transparent px-4 py-[6px]'>
            <ExploreIcon />
            <span className='text-[15px] text-black'>Explore Our Offers</span>
          </button>
          <button className='flex h-[46px] max-w-[200px] cursor-pointer items-center gap-[11px] rounded-[24px] border-0 bg-transparent px-4 py-[6px]'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-white drop-shadow-xl'>
              <PlayIcon />
            </div>
            <span className='text-[15px] text-gray'>
              <span className='hidden md:inline'>Watch</span> Video
            </span>
          </button>
        </div>
        <div className='absolute z-50 hidden items-center gap-6 rounded-full bg-white p-6 drop-shadow-xl md:flex'>
          {offers.map((item) => (
            <>
              {item?.name ? (
                <div>
                  <p
                    className={`mb-[6px] text-base text-gray ${
                      item.highlight ? 'font-semibold' : 'font-normal'
                    }`}
                  >
                    {item.name}
                  </p>
                  <div className='flex items-center gap-1'>
                    <span className='h-[19px] w-[19px]'>{item.icon}</span>
                    <span className='text-[13px] font-medium'>{item.desc}</span>
                  </div>
                </div>
              ) : (
                <span className='h-[46px] w-[0.77px] bg-gray opacity-50'></span>
              )}
            </>
          ))}
          <button className='h-[46px] max-w-[200px] cursor-pointer rounded-[24px] border-[1.2px] border-solid border-black bg-transparent px-4 py-[6px]'>
            See More
          </button>
        </div>
      </div>
      <div className='hidden max-h-[304px] w-full md:absolute md:-right-0 md:block md:w-2/4'>
        <Image className='h-full w-full' src={HeroBg} alt='hero-bg' />
      </div>
      <CustomSlider />
    </div>
  );
};

export default Hero;
