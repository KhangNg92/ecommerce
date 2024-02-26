'use client';
import type { CollapseProps } from 'antd';
import { Collapse, Select } from 'antd';
import dayjs from 'dayjs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Avatar1 from '@/assets/images/avatar_1.png';
import Avatar2 from '@/assets/images/avatar_2.png';
import Avatar3 from '@/assets/images/avatar_3.png';
import Chair2 from '@/assets/images/chair_beige.png';
import Chair1 from '@/assets/images/chair_black.png';
import Chair3 from '@/assets/images/chair_red.png';
import Chair4 from '@/assets/images/chair_soldout.png';
import { LoveIcon, MinusIcon, PlusIcon } from '@/assets/svg';
import Star from '@/components/atoms/Star';
import Time from '@/components/atoms/Time';

const data = {
  review: {
    rate: 5,
    total_review: 11,
    users: [
      {
        id: 1,
        avatar: Avatar1,
        name: 'Sofia Harvetz',
        rate: 5,
        comment:
          'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum dele',
      },
      {
        id: 2,
        avatar: Avatar2,
        name: 'Sofia Harvetz',
        rate: 2,
        comment:
          'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum dele',
      },
      {
        id: 3,
        avatar: Avatar3,
        name: 'Sofia Harvetz',
        rate: 3,
        comment:
          'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum dele',
      },
      {
        id: 4,
        avatar: Avatar1,
        name: 'Sofia Harvetz',
        rate: 4,
        comment:
          'I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum dele',
      },
    ],
  },
  title: 'Tray Table',
  description:
    'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
  price_discount: '$199.00',
  price: '$400.00',
  offer_expires: '2024-01-05T15:40:20.000Z',
  measurements: '17 1/2x20 5/8 "',
  color: 'Black',
  quantity: 1,
  sku: 1117,
  category: ['Living Room', 'Bedroom'],
  additional_info: {
    details:
      'You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.',
    packaging: {
      width: '20 "',
      height: '1 ½ "',
      length: '21 ½ "',
      weight: '7 lb 8 oz',
      package: 1,
    },
  },
};

const ContentProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const DEFAULT_REVIEW_LIMIT = 3;
  const [limitReview, setLimitReview] = useState(DEFAULT_REVIEW_LIMIT);
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <span className='text-lg font-medium text-active'>Additional Info</span>,
      children: (
        <div>
          <h4 className='mb-2 text-sm font-semibold text-gray'>Details</h4>
          <p className='mb-4 text-xs'>{data.additional_info.details}</p>
          <h4 className='mb-2 text-sm font-semibold  text-gray'>Packaging</h4>
          <p className='mb-0 text-xs'>
            Width: {data.additional_info.packaging.width} Height:
            {data.additional_info.packaging.height} Length: {data.additional_info.packaging.length}
          </p>
          <p className='mb-0 text-xs'>Weight: {data.additional_info.packaging.weight}</p>
          <p className='mb-0 text-xs'>Package(s): {data.additional_info.packaging.package}</p>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className='flex items-center gap-3'>
          <span className='text-lg font-medium text-active'>
            Reviews ({data.review.total_review})
          </span>
          <Star rate={data.review.rate} />
        </div>
      ),
      children: (
        <div className='pt-6'>
          <Select
            className='w-full'
            defaultValue='newest'
            size='large'
            onChange={(val) => {
              console.log(val);
            }}
            options={[{ value: 'newest', label: 'Newest' }]}
          />
          <div className='flex flex-col gap-6 pt-6'>
            {data.review.users.slice(0, limitReview).map((item) => (
              <div
                key={item?.id}
                className='flex gap-10 border-0 border-b-[1px] border-solid border-bgWhiteGray pb-6'
              >
                <Image
                  className='hidden md:block'
                  src={item.avatar}
                  alt='image'
                  width={72}
                  height={72}
                />
                <div className='flex flex-col gap-4'>
                  <div className='flex gap-4'>
                    <Image
                      className='block md:hidden'
                      src={item.avatar}
                      alt='image'
                      width={72}
                      height={72}
                    />
                    <div>
                      <h3 className='m-0 text-xl font-semibold text-active'>{item.name}</h3>
                      <Star rate={item.rate} />
                    </div>
                  </div>
                  <p className='m-0 text-base'>{item.comment}</p>
                </div>
              </div>
            ))}
            <button
              onClick={() =>
                setLimitReview(
                  limitReview === DEFAULT_REVIEW_LIMIT
                    ? data.review.users?.length
                    : DEFAULT_REVIEW_LIMIT,
                )
              }
              className='m-auto w-[160px] cursor-pointer rounded-[80px] border border-solid border-active bg-white px-10 py-[6px] text-base text-active'
            >
              Load more
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-[10px]'>
          <div>
            <Star rate={data.review.rate} />
          </div>
          <span className='text-xs text-active'>
            {data.review.total_review} {data.review.total_review > 1 ? 'Reviews' : 'Review'}
          </span>
        </div>
        <h1 className='m-0 text-[40px] font-medium leading-[44px] tracking-[-0.4px]'>
          {data.title}
        </h1>
        <p className='m-0 text-base text-gray'>{data.description}</p>
        <div className='flex items-center gap-3'>
          <span className='text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-title'>
            {data.price_discount}
          </span>
          <span className='text-xl font-medium text-gray line-through'>{data.price}</span>
        </div>
      </div>
      <div className='my-4 flex flex-col gap-3 border-0 border-y-[1px] border-solid border-bgWhiteGray py-6 '>
        <p className='m-0 text-base'>Offer expires in:</p>
        <div className='flex gap-4'>
          <Time label='Days' value={dayjs(data.offer_expires).format('DD')} />
          <Time label='Hours' value={dayjs(data.offer_expires).format('HH')} />
          <Time label='Minutes' value={dayjs(data.offer_expires).format('mm')} />
          <Time label='Seconds' value={dayjs(data.offer_expires).format('ss')} />
        </div>
      </div>
      <div className='mb-4'>
        <h4 className='mb-2 text-base font-semibold text-gray'>Measurements</h4>
        <p className='m-0 text-xl'>{data.measurements}</p>
      </div>
      <div className='mb-10'>
        <h4 className='mb-2 text-base font-semibold text-gray'>Choose Color</h4>
        <p className='text-xl'>{data.color}</p>
        <div className='flex items-center gap-4'>
          <button className='cursor-pointer border border-solid bg-transparent p-0 hover:border hover:border-active'>
            <Image src={Chair1} alt='img' />
          </button>
          <button className='cursor-pointer border border-solid border-transparent bg-transparent p-0 hover:border hover:border-active'>
            <Image src={Chair2} alt='img' />
          </button>
          <button className='cursor-pointer border border-solid border-transparent bg-transparent p-0 hover:border hover:border-active'>
            <Image src={Chair3} alt='img' />
          </button>
          <button className='cursor-pointer border border-solid border-transparent bg-transparent p-0 hover:border hover:border-active'>
            <Image src={Chair4} alt='img' />
          </button>
        </div>
      </div>
      <div>
        <div className='mb-4 flex items-center gap-6'>
          <div className='flex min-w-[120px] items-center gap-6'>
            <button
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity <= 1}
              className='flex cursor-pointer items-center justify-center border-0 bg-transparent p-0'
            >
              <MinusIcon />
            </button>
            <span className='min-w-[20px] text-center text-base text-title'>{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className='flex cursor-pointer items-center justify-center border-0 bg-transparent p-0'
            >
              <PlusIcon />
            </button>
          </div>
          <button className='flex h-[52px] flex-1 cursor-pointer items-center  justify-center gap-2 rounded-[8px] border border-active bg-white px-10 py-[10px]'>
            <LoveIcon />
            <span className='text-lg text-active'>Wishlist</span>
          </button>
        </div>
        <button className='mb-6 flex  h-[52px] w-full flex-1 cursor-pointer items-center justify-center gap-2 rounded-[8px] border-0  bg-primary px-10 py-[10px] text-lg font-medium tracking-[-0.4px] text-white'>
          Add to Cart
        </button>
      </div>
      <div>
        <div className='flex flex-col gap-2 py-4'>
          <div className='flex items-center'>
            <span className='block w-1/3 text-xs uppercase text-gray'>SKU</span>
            <span className='text-xs text-active'>{data.sku}</span>
          </div>
          <div className='flex items-center'>
            <span className='block w-1/3 text-xs uppercase text-gray'>CATEGORY</span>
            <span className='text-xs text-active'>{data.category.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className='custom-collapse'>
        <Collapse
          expandIconPosition='end'
          items={items}
          defaultActiveKey={['1']}
          onChange={onChange}
          ghost
        />
      </div>
    </div>
  );
};

export default ContentProductDetails;
