'use client';
import 'react-slideshow-image/dist/styles.css';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import previewImage7 from 'src/assets/images/product-detail/PasteSlide7.png';

import { LeftOutlined, RightOutlined } from '@/assets/svg';

interface Props {
  imagePopup: {
    id: number;
    urlSlide: StaticImageData;
  }[];
}

const SlideProductDetail = ({ imagePopup }: Props) => {
  const indicators = (index?: number) => (
    <div className='hidden md:block'>
      <Image
        src={(index && imagePopup[index]?.urlSlide) || previewImage7}
        className='h-[167px] w-[167px] object-cover'
        alt='imagePreview'
      />
    </div>
  );

  return (
    <div>
      <Slide
        slidesToShow={1}
        slidesToScroll={1}
        transitionDuration={400}
        indicators={indicators}
        prevArrow={
          <div>
            <LeftOutlined />
          </div>
        }
        nextArrow={
          <div>
            <RightOutlined />
          </div>
        }
      >
        {imagePopup.map((imageSlideShow, index) => {
          return (
            <div className=' relative flex justify-center' key={index}>
              <Image
                src={imageSlideShow.urlSlide}
                className='mb-[14px] mt-[34px] h-full w-full object-cover md:h-full'
                alt='image'
              />
              <div className='absolute left-5 top-5'>
                <div className=' rounded-sm bg-white px-3 py-1 text-center font-semibold uppercase text-black'>
                  new
                </div>
                <div className='mt-2 flex items-center justify-center rounded-sm bg-error px-4 py-1 font-semibold uppercase text-white'>
                  -50%
                </div>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideProductDetail;
