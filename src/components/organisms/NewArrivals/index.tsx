'use client';
import React from 'react';

import ProductSlide from '@/components/organisms/ProductSlide';

const NewArrivals = () => {
  return (
    <div className='m-auto flex w-full max-w-screen-xl flex-col px-5 pt-12 md:px-40'>
      <ProductSlide title={'New Arrivals'} />
    </div>
  );
};

export default NewArrivals;
