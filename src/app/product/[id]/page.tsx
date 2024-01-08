'use client';
import React from 'react';

import SlideProductDetail from '@/components/atoms/SlideProductDetail';
import ContentProductDetails from '@/components/organisms/ContentProductDetails';

export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div className='pb m-auto flex w-full max-w-screen-xl flex-col gap-2 px-5 pt-6 md:gap-3 md:px-40 md:pt-16'>
      <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
        <div className='bg-black'>
          <SlideProductDetail />
        </div>
        <div className=''>
          {JSON.stringify(params)}
          <ContentProductDetails />
        </div>
      </div>
    </div>
  );
}
