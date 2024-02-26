import { isEmpty } from 'lodash';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import PasteimageShopping from 'src/assets/images/PasteimageShopping.png';

import { RemoveIcon, TicketIcon } from '@/assets/svg';
import { useCheckoutStore } from '@/stores/checkout-store';
import StringUtils from '@/utils/StringUtils';

import type { CardItemProps } from '../../CardItem';
import QuantityInput from './QuantityInput';
import type { ItemTypeDelivery } from './TypeDelivery';
import TypeDelivery from './TypeDelivery';

interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const dummyData = [
  {
    type: 'Free shipping',
    price: '$0.00',
  },
  {
    type: 'Express shipping',
    price: '+$15.00',
  },
  {
    type: 'Pick Up',
    price: '%21.00',
  },
];

const CouponCodeInput = () => {
  return (
    <div className='py-[16px]'>
      <div className='text-[14px] text-gray md:text-[16px] md:text-zinc-950'>
        Add your code for an instant cart discount
      </div>
      <div className='mt-2 flex w-[100%] items-center justify-between rounded-md border border-solid border-gray px-2 py-3'>
        <div className='flex flex-row items-center gap-2'>
          <TicketIcon />
          <input
            placeholder='Coupon Code'
            className='h-8 w-full border-none text-[16px] outline-none placeholder:text-gray'
          />
        </div>
        <button className='cursor-pointer border-none bg-inherit bg-none'>Apply</button>
      </div>
    </div>
  );
};

export default function StepOneCart({ setCurrentStep }: Props) {
  const [type, setType] = React.useState<ItemTypeDelivery | undefined>(dummyData[0]);
  const [listCartStore, setListCartStore] = useState<CardItemProps[]>([]);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const cartStore = useCheckoutStore((state) => state.cartStore);
  const shippingStore = useCheckoutStore((state) => state.shippingStore);
  const removeProduct = useCheckoutStore((state) => state.removeProduct);
  const shippingPriceProduct = useCheckoutStore((state) => state.shippingPriceProduct);
  const totalCartProduct = useCheckoutStore((state) => state.totalCartProduct);
  const totalCartState = useCheckoutStore((state) => state.totalCartStore);

  // export

  const subTotalPrice = listCartStore
    .reduce((accumulator, currentValue) => accumulator + Number(currentValue.totalPrice), 0)
    .toFixed(2);

  const handleChangeType = (item: ItemTypeDelivery) => {
    shippingPriceProduct(item);
    totalCartProduct(
      StringUtils.calculateUpdatedTotal(
        type?.type as string,
        Number(subTotalPrice),
        type?.price as string,
      ) as number,
    );
  };

  useEffect(() => {
    setListCartStore(cartStore);
  }, [cartStore]);

  useEffect(() => {
    setType(shippingStore);
  }, [shippingStore]);

  useEffect(() => {
    setTotalProduct(totalCartState);
  }, [totalCartState]);
  useEffect(() => {
    totalCartProduct(
      StringUtils.calculateUpdatedTotal(
        type?.type as string,
        Number(subTotalPrice),
        type?.price as string,
      ) as number,
    );
  }, [type, listCartStore]);

  return (
    <div className='flex-col gap-[64px] py-[16px] md:grid md:grid-cols-12 md:py-[80px]'>
      <div className='max-w-[643px] md:col-span-7 '>
        <div>
          <div>
            <div className='grid grid-cols-2'>
              <div className=''>
                <div className='text-normal font-semibold'>Product</div>
              </div>
              <div className=' hidden w-full items-center justify-center gap-[74.5px] md:flex'>
                <div className='text-normal font-semibold'>Quantity</div>
                <div className='text-normal font-semibold'>Price</div>
                <div className='text-normal font-semibold'>Subtotal</div>
              </div>
            </div>
            <div className='mt-[24px] h-[1px] w-full bg-black' />
          </div>
          {listCartStore.map((shopingProduct, index) => (
            <div key={index}>
              <div
                className='grid grid-cols-2 '
                style={{
                  borderBottom: '1px solid #ccc',
                }}
              >
                <div className=' py-[24px]'>
                  <div className='flex items-center '>
                    <Image
                      src={PasteimageShopping}
                      alt='PasteimageShopping'
                      className='h-[96px] w-[80px]'
                    />
                    <div className='ml-[10px] md:ml-[16px]'>
                      <div className='text-small font-semibold text-bgDarkGray'>
                        {shopingProduct.title}
                      </div>
                      <div className='my-[14px] text-tiny text-gray'>{'Color: Black'}</div>
                      <button
                        onClick={() => removeProduct(shopingProduct.id)}
                        className='hidden items-center justify-center border-none bg-inherit	 md:flex'
                      >
                        <RemoveIcon />
                        <div className='ml-[4px] cursor-pointer text-small font-semibold text-gray'>
                          Remove
                        </div>
                      </button>
                      <div className=' block md:hidden'>
                        <QuantityInput item={shopingProduct} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex w-full items-center justify-center md:gap-[60px]'>
                  <div className='hidden md:block'>
                    <QuantityInput item={shopingProduct} />
                  </div>
                  <div className=' hidden h-full w-full items-center text-large md:flex'>
                    {`${shopingProduct.price}`}
                  </div>
                  <div className='flex h-full w-full justify-end py-6 text-small font-semibold  md:h-full md:items-center md:text-large'>
                    <div>
                      {shopingProduct.totalPrice
                        ? `$${shopingProduct.totalPrice}`
                        : `${shopingProduct.price}`}
                      <div className='mt-4 flex justify-end md:hidden'>
                        <RemoveIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!isEmpty(listCartStore) && (
            <div className='mt-4 hidden w-full justify-end md:flex'>
              <div className=' text-large'>All price:</div>
              <span className='ml-16 text-large font-semibold'>${subTotalPrice}</span>
            </div>
          )}
        </div>
      </div>
      {/* Cart Summary */}
      <div className='col-span-5 px-1 pb-12 pt-10 md:p-0'>
        <div className={'block md:hidden'}>
          <div className='mt-3 text-[16px] font-semibold'>Have a coupon?</div>
          <CouponCodeInput />
        </div>
        <div className='h-full w-full rounded-lg border border-solid border-stone-500 p-[16px] md:p-[24px]'>
          <div className='text-[16px] font-normal md:text-[20px]'>Cart summary</div>
          <div className='border-gray-300 my-4 hidden flex-row items-center justify-between border-b border-b-[#F4F4F4] md:flex md:py-[13px]'>
            <div className='text-[16px]'>All price</div>
            <div className='text-[16px]  font-semibold'>${subTotalPrice}</div>
          </div>
          <div className='border-gray-300 hidden flex-row items-center justify-between md:flex'>
            <div className='text-[16px]'>Shipping</div>
            <div className='text-[16px]  font-semibold'>
              {/* ${parseFloat(shippingStore.price.replace(/[^\d.-]/g, '')).toFixed(2)} */}
              {type?.price}
            </div>
          </div>
          <div className='mt-4'>
            <TypeDelivery data={dummyData} type={type} onChange={handleChangeType} />
          </div>
          <div className={'hidden md:block'}>
            <CouponCodeInput />
          </div>
          <div className='flex flex-row justify-between py-[13px] md:hidden'>
            <div className='text-[14px] font-semibold md:text-[20px]'>Subtotal</div>
            <div className='text-[14px] font-semibold md:text-[20px]'>${subTotalPrice}</div>
          </div>
          <div className='flex flex-row justify-between py-[13px]'>
            <div className='text-[16px] font-semibold md:text-[20px]'>Total </div>
            <div className='text-[16px] font-semibold md:text-[20px]'>${totalProduct}</div>
          </div>
          <button
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className='mt-4 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-[8px] border-none bg-primary px-[26px] py-[10px] text-white'
          >
            Check-out
          </button>
        </div>
      </div>
    </div>
  );
}
