import Image from 'next/image';
import React, { useEffect } from 'react';
import PasteimageShopping from 'src/assets/images/PasteimageShopping.png';

import { useCheckoutStore } from '@/stores/checkout-store';

import type { CardItemProps } from '../../CardItem';

export default function StepThreeCart() {
  const [listCartStore, setListCartStore] = React.useState<CardItemProps[]>([]);
  const cartStore = useCheckoutStore((state) => state.cartStore);

  useEffect(() => {
    if (cartStore) {
      setListCartStore(cartStore);
    }
  }, [cartStore]);
  return (
    <div className='pb m-auto mb-20 flex w-full max-w-screen-xl flex-col items-center justify-center gap-2 pt-6 '>
      <div className=' max-w-[738px] shadow-xl'>
        <div className='p-4 md:px-[96px] md:py-[80px] '>
          <div className='mb-4 text-base text-gray md:text-center md:text-[28px]'>
            Thank you! 🎉
          </div>
          <div className='w-[185px] text-[34px] font-medium md:w-full md:text-center md:text-[40px]'>
            Your order has been received
          </div>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 gap-4 py-16 md:min-w-[375px]'>
              {listCartStore.map((listCart) => (
                <div className='flex justify-center' key={listCart.id}>
                  <div className='relative'>
                    <Image src={PasteimageShopping} alt='img' />
                    <div className='  absolute right-[-10px] top-[-20px]'>
                      <div className='flex h-[32px] w-[32px] items-center justify-center rounded-[100%] bg-black text-white '>
                        2
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center pb-5'>
            <div className='flex min-w-[300px] flex-col gap-2 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-6'>
              <div className='flex text-sm font-semibold text-gray'>Order code:</div>
              <div className='text-sm font-semibold text-black'>#0123_45678</div>
              <div className='mt-3 h-[1px] w-full bg-gray/20 md:hidden' />
            </div>
          </div>
          <div className='flex justify-center pb-5'>
            <div className='flex min-w-[300px] flex-col gap-2 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-6'>
              <div className='flex text-sm  font-semibold text-gray'>Date:</div>
              <div className='text-sm font-semibold text-black'>October 19, 2023</div>
              <div className='mt-3 h-[1px] w-full bg-gray/20 md:hidden' />
            </div>
          </div>
          <div className='flex justify-center pb-5'>
            <div className='flex min-w-[300px] flex-col gap-2 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-6'>
              <div className='flex text-sm  font-semibold text-gray'>Total:</div>
              <div className='text-sm font-semibold text-black'>$1,345.00</div>
              <div className='mt-3 h-[1px] w-full bg-gray/20 md:hidden' />
            </div>
          </div>
          <div className='flex justify-center pb-5'>
            <div className='flex min-w-[300px] flex-col gap-2 md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-6'>
              <div className='flex text-sm  font-semibold text-gray'>Payment method:</div>
              <div className='text-sm font-semibold text-black '>Credit Card</div>
              <div className='mt-3 h-[1px] w-full bg-gray/20 md:hidden' />
            </div>
          </div>
          <div className='mt-[20px] flex justify-center'>
            <button className='h-[52px] w-full cursor-pointer rounded-full border-none bg-primary text-base font-medium text-white md:w-52'>
              Purchase history
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
