'use client';
import Image from 'next/image';
import React from 'react';
/* eslint import/no-extraneous-dependencies: 0 */
import Slider from 'react-slick';

import HeroBg from '@/assets/images/bg-hero.png';

const CustomSlider = () => {
  const settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots__root',
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: () => <div className='custom-dots__item'></div>,
  };
  return (
    <div className='block max-h-[304px] md:hidden'>
      <Slider {...settings}>
        <div>
          <Image className='h-full w-full' src={HeroBg} alt='hero-bg' />
        </div>
        <div>
          <Image className='h-full w-full' src={HeroBg} alt='hero-bg' />
        </div>
        <div>
          <Image className='h-full w-full' src={HeroBg} alt='hero-bg' />
        </div>
      </Slider>
    </div>
  );
};

export default CustomSlider;
