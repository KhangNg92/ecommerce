'use client';
import React from 'react';
import previewSlide1 from 'src/assets/images/product-detail/PasteSlide1.png';
import previewSlide2 from 'src/assets/images/product-detail/PasteSlide2.png';
import previewSlide3 from 'src/assets/images/product-detail/PasteSlide3.png';
import previewSlide4 from 'src/assets/images/product-detail/PasteSlide4.png';
import previewSlide5 from 'src/assets/images/product-detail/PasteSlide5.png';
import previewSlide6 from 'src/assets/images/product-detail/PasteSlide6.png';
import previewSlide7 from 'src/assets/images/product-detail/PasteSlide7.png';

import { BreadcumbsIcon } from '@/assets/svg';
import SlideProductDetail from '@/components/atoms/SlideProductDetail';
import ContentProductDetails from '@/components/organisms/ContentProductDetails';
import ProductSlide from '@/components/organisms/ProductSlide';
import YouMightAlsoLike from '@/components/organisms/YouMightAlsoLike';

const imagePopup = [
  {
    id: 7,
    urlSlide: previewSlide7,
  },
  {
    id: 1,
    urlSlide: previewSlide1,
  },
  {
    id: 2,
    urlSlide: previewSlide2,
  },
  {
    id: 3,
    urlSlide: previewSlide3,
  },
  {
    id: 4,
    urlSlide: previewSlide4,
  },
  {
    id: 5,
    urlSlide: previewSlide5,
  },
  {
    id: 6,
    urlSlide: previewSlide6,
  },
];

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div className='pb m-auto flex w-full max-w-screen-xl flex-col gap-2 px-5 pt-6 md:gap-3 md:px-40 md:pt-16'>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex list-none items-center space-x-1 rtl:space-x-reverse md:space-x-2'>
          <li className='inline-flex items-center'>
            <a
              href='#'
              className='inline-flex items-center text-sm font-medium text-gray hover:text-[#111315]'
            >
              Home
            </a>
          </li>
          <li>
            <div className='flex items-center'>
              <BreadcumbsIcon />
              <a
                href='#'
                className='ms-1 text-sm font-medium text-gray hover:text-[#111315] md:ms-4'
              >
                Shop
              </a>
            </div>
          </li>
          <li>
            <div className='flex items-center'>
              <BreadcumbsIcon />
              <a
                href='#'
                className='ms-1 text-sm font-medium text-gray hover:text-[#111315] md:ms-4'
              >
                Living Room
              </a>
            </div>
          </li>
          <li aria-current='page'>
            <div className='flex items-center'>
              <BreadcumbsIcon />
              <span className='ms-1  text-sm font-medium text-[#111315] md:ms-4'>Product</span>
            </div>
          </li>
        </ol>
      </nav>
      <div className='flex-col md:grid md:grid-cols-2 md:gap-14'>
        <div>
          <SlideProductDetail imagePopup={imagePopup} />
        </div>
        <div>
          {JSON.stringify(params)}
          <ContentProductDetails />
        </div>
      </div>
      <div className={'py-12'}>
        <ProductSlide title={'You might also like'} />
      </div>
      <YouMightAlsoLike />
    </div>
  );
}
