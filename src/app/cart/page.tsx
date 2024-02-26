import React from 'react';

import Steps from '@/components/atoms/StepsCart';

export default function Cart() {
  return (
    <div>
      <div className='pb m-auto flex w-full max-w-screen-xl flex-col gap-2 px-5 pt-6 md:gap-3 md:px-40 md:pt-16'>
        <h1 className='text-center text-[40px] text-[#111315] md:text-[54px] '>Cart</h1>
        <Steps />
      </div>
    </div>
  );
}
