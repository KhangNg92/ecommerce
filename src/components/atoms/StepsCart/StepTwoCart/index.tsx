'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PasteimageShopping from 'src/assets/images/PasteimageShopping.png';

import { MoneyIcon, OrderSummary, RemoveIcon } from '@/assets/svg';
import { useCheckoutStore } from '@/stores/checkout-store';
import StringUtils from '@/utils/StringUtils';

import type { CardItemProps } from '../../CardItem';
import QuantityInput from '../StepOneCart/QuantityInput';
import type { ItemTypeDelivery } from '../StepOneCart/TypeDelivery';
import TypeDelivery from '../StepOneCart/TypeDelivery';
import InputCheckout from './InputCheckout';
import type { SchemaFormStepTwo } from './schemaFormStepTwo';
import { schemaFormStepTwo } from './schemaFormStepTwo';
import SelectInput from './SelectInput';

const dummyData = [
  {
    type: 'Pay by Card Credit',
    icon: <MoneyIcon />,
  },
];
const countryData = [
  {
    id: 1,
    country: 'United States',
    value: 'US',
  },
  {
    id: 2,
    country: 'Canada',
    value: 'CA',
  },
  {
    id: 3,
    country: 'France',
    value: 'FR',
  },
  {
    id: 4,
    country: 'Germany',
    value: 'DE',
  },
];
interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export default function StepTwoCart({ setCurrentStep }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SchemaFormStepTwo>({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone_number: '',
      email: '',
      street_address: '',
      country: '',
      city: '',
      state: '',
      zip_code: '',
      card_number: '',
      expiration_date: '',
      cvc_code: '',
    },
    resolver: yupResolver(schemaFormStepTwo),
  });
  const [listCartStore, setListCartStore] = React.useState<CardItemProps[]>([]);
  const [type, setType] = React.useState<ItemTypeDelivery | undefined>(dummyData[0]);
  const [totalProduct, setTotalProduct] = useState<number>(0);

  const [shippingStoreCart, setShippingStoreCart] = React.useState<ItemTypeDelivery>({
    price: '',
    type: '',
  });
  const cartStore = useCheckoutStore((state) => state.cartStore);
  const removeProduct = useCheckoutStore((state) => state.removeProduct);
  const shippingStore = useCheckoutStore((state) => state.shippingStore);
  const totalCartState = useCheckoutStore((state) => state.totalCartStore);
  const totalCartProduct = useCheckoutStore((state) => state.totalCartProduct);

  const subTotalPrice = listCartStore
    .reduce((accumulator, currentValue) => accumulator + Number(currentValue.totalPrice), 0)
    .toFixed(2);

  useEffect(() => {
    setShippingStoreCart(shippingStore);
  }, [shippingStore]);

  useEffect(() => {
    if (cartStore) {
      setListCartStore(cartStore);
    }
  }, [cartStore]);
  useEffect(() => {
    totalCartProduct(
      StringUtils.calculateUpdatedTotal(
        shippingStoreCart?.type as string,
        Number(subTotalPrice),
        shippingStoreCart?.price as string,
      ) as number,
    );
  }, [listCartStore]);

  useEffect(() => {
    setTotalProduct(totalCartState);
  }, [totalCartState]);
  const handleChangeType = (item: ItemTypeDelivery) => {
    setType(item);
  };
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    setCurrentStep((prev) => prev + 1);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className='flex-col gap-[64px] py-[16px] md:grid md:grid-cols-12 md:py-0 md:pt-[80px]'>
        <div className='max-w-[643px] md:col-span-7 '>
          <div className='rounded-md border border-solid border-stone-500'>
            <div className='px-4 py-6 md:px-6 md:py-10'>
              <div className='text-base font-semibold md:text-extraLarge md:font-medium'>
                Contact Infomation
              </div>
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <InputCheckout
                  register={register}
                  name='first_name'
                  errorMessage={errors.first_name?.message}
                  placeholder='First name'
                  title='FIRST NAME'
                />
                <InputCheckout
                  register={register}
                  name='last_name'
                  errorMessage={errors.last_name?.message}
                  placeholder='Last name'
                  title='Last name'
                />
              </div>
              <div className='mt-6'>
                <InputCheckout
                  register={register}
                  name='phone_number'
                  errorMessage={errors.phone_number?.message}
                  placeholder='Phone number'
                  title='Phone number'
                />
              </div>
              <div className='mt-6'>
                <InputCheckout
                  register={register}
                  name='email'
                  errorMessage={errors.email?.message}
                  placeholder='Your Email'
                  title='Email address'
                />
              </div>
            </div>
          </div>
          <div className='mt-6 rounded-md border border-solid border-stone-500'>
            <div className='px-4 py-6 md:px-6 md:py-10'>
              <div className='text-base font-semibold md:text-extraLarge md:font-medium'>
                Shipping Address
              </div>
              <div className='mt-6'>
                <InputCheckout
                  register={register}
                  name='street_address'
                  errorMessage={errors.street_address?.message}
                  placeholder='Street address'
                  title='Street address *'
                />
              </div>
              <div className='mt-6'>
                <Controller
                  control={control}
                  name='country'
                  render={({ field }) => {
                    return (
                      <SelectInput
                        countryData={countryData}
                        errorMessage={errors.country?.message}
                        onChange={field.onChange}
                        value={field.value}
                      />
                    );
                  }}
                />
              </div>
              <div className='mt-6'>
                <InputCheckout
                  register={register}
                  name='city'
                  errorMessage={errors.city?.message}
                  placeholder='Town / City'
                  title='Town / City *'
                />
              </div>
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <InputCheckout
                  register={register}
                  name='state'
                  errorMessage={errors.state?.message}
                  placeholder='State'
                  title='State'
                />
                <InputCheckout
                  register={register}
                  name='zip_code'
                  errorMessage={errors.zip_code?.message}
                  placeholder='Zip Code'
                  title='Zip Code'
                />
              </div>
              <div className='mt-6 flex cursor-pointer items-center'>
                <input
                  // checked
                  id='checked-checkbox'
                  type='checkbox'
                  // value=''
                  className=' dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 h-4 w-4  rounded md:h-5 md:w-5 '
                />
                <label
                  htmlFor='checked-checkbox'
                  className='ms-2 cursor-pointer text-xs text-gray md:text-base '
                >
                  Use a different billing address (optional)
                </label>
              </div>
            </div>
          </div>
          <div className=' mt-6 rounded-md border border-solid border-stone-500'>
            <div className='px-4 py-6 md:px-6 md:py-10'>
              <div className='text-extraLarge'>Payment method</div>
              <div className='my-6'>
                <TypeDelivery
                  data={dummyData as ItemTypeDelivery[]}
                  type={type as ItemTypeDelivery | undefined}
                  onChange={handleChangeType}
                />
              </div>
              <div className='h-[1.5px] w-full bg-gray/20' />
              <div className='mt-6'>
                <InputCheckout
                  register={register}
                  name='card_number'
                  errorMessage={errors.card_number?.message}
                  placeholder='1234 1234 1234'
                  title='Card Number'
                />
              </div>
              <div className='mt-6 grid grid-cols-2 gap-4'>
                <InputCheckout
                  register={register}
                  name='expiration_date'
                  errorMessage={errors.expiration_date?.message}
                  placeholder='Expiration date'
                  title='MM/YY'
                />
                <InputCheckout
                  register={register}
                  name='cvc_code'
                  errorMessage={errors.cvc_code?.message}
                  placeholder='CVC'
                  title='CVC code'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-5 mt-6 w-full md:mt-0'>
          <div className='rounded-md border border-solid border-black p-4 md:p-0  md:!px-6 md:!py-4 md:pb-12 '>
            {/* <div>
            <div className='mt-[24px] h-[1px] w-full bg-black' />
          </div> */}
            <div className='text-xl md:text-[28px]'>Order summary</div>
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
                        <div className='text-xs font-semibold text-bgDarkGray md:text-small'>
                          {shopingProduct.title}
                        </div>
                        <div className='my-[14px] text-tiny text-gray'>{'color: black'}</div>

                        <div className=' block '>
                          <QuantityInput item={shopingProduct} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex w-full items-center justify-center '>
                    <div className='flex h-full w-full items-start justify-end py-6 text-small font-semibold   md:text-large'>
                      <div>
                        {shopingProduct.totalPrice
                          ? `$${shopingProduct.totalPrice}`
                          : shopingProduct.price || shopingProduct.price_discount}
                        <button
                          onClick={() => removeProduct(shopingProduct.id)}
                          className='mt-4 flex w-full cursor-pointer justify-end border-none bg-inherit bg-none'
                        >
                          <RemoveIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div className='my-4 flex w-full justify-between '>
                <div className='flex items-center'>
                  <div className='mr-2'>
                    <OrderSummary />
                  </div>
                  <div className=' text-base'>JenkateMW:</div>
                </div>
                <span className=' text-base font-medium text-[#83BF6E]'>-$25.00 [Remove]</span>
              </div>
              <div className=' h-[1px] w-full bg-gray/30' />
            </div>
            <div>
              <div className='my-4 flex w-full justify-between '>
                <div className=' text-base'>Shipping:</div>
                <span className=' text-base font-medium'>{shippingStoreCart?.type}</span>
              </div>
              <div className=' h-[1px] w-full bg-gray/30' />
            </div>
            <div>
              <div className='my-4 flex w-full justify-between  '>
                <div className=' text-base'>Shipping:</div>
                <span className=' text-base font-medium'>{shippingStoreCart.price}</span>
              </div>
              <div className=' h-[1px] w-full bg-gray/30' />
            </div>
            <div>
              <div className='my-4 flex w-full justify-between '>
                <div className=' text-xl font-medium'>Total:</div>
                <span className=' text-xl font-medium'>${totalProduct}</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' flex items-center justify-center gap-5 md:col-span-7 md:py-0 md:pb-[80px]'>
          <button
            onClick={() => setCurrentStep((pre) => pre - 1)}
            className='mt-4 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-[8px] border-none  bg-slate-900 px-[26px] py-[10px] text-white'
          >
            Back Step 1
          </button>
          <button
            type='submit'
            className='mt-4 flex h-[52px] w-full cursor-pointer items-center justify-center rounded-[8px] border-none bg-primary px-[26px] py-[10px] text-white'
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
}
