import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import React from 'react';

import { XIcon } from '@/assets/svg/X';

type IData = {
  id: string;
  product: string;
  color: string;
  avatar: string;
  price: string;
};

const dataSource = [
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
  {
    id: '#3456_768',
    product: 'Tray Table',
    color: 'Black',
    avatar: '/tray-table.png',
    price: '$ 425',
  },
];

const columns: ColumnsType<IData> = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (product, record) => (
      <div className='flex items-center gap-4'>
        <Button type='text' size='large' icon={<XIcon />} />
        <div className='flex items-center gap-4'>
          <Image width={60} height={72} src={record.avatar} alt={product} className='h-20 w-20' />
          <div className='flex flex-col gap-2'>
            <span className='text-sm font-semibold text-title dark:text-white'>{product}</span>
            <span className='color text-sm text-gray'>Color: {record.color}</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => <span className='text-sm text-title dark:text-white'>{price}</span>,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: () => (
      <Button size='large' className='!px-6 !py-1.5' type='primary'>
        Add to cart
      </Button>
    ),
  },
];

export function AccountWishlist() {
  return (
    <div className='flex flex-col gap-5 pb-20 pt-10 md:pt-0'>
      <h1 className='m-0 p-0 text-xl font-semibold text-title'>Your Wishlist</h1>
      {/* for desktop */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        size='large'
        className='hidden md:block'
      />

      {/* for mobile */}
      <div className='flex flex-col gap-8 md:hidden'>
        {dataSource.map((item) => (
          <div key={item.id} className='border-b-1 flex flex-col gap-4 !border-textDark pb-4'>
            <div className='flex items-center gap-4'>
              <Button type='text' size='large' icon={<XIcon />} />
              <div className='flex items-center gap-4'>
                <Image
                  width={60}
                  height={72}
                  src={item.avatar}
                  alt={item.product}
                  className='h-20 w-20'
                />
                <div className='flex flex-col gap-2'>
                  <span className='text-sm font-semibold text-title'>{item.product}</span>
                  <span className='text-sm text-gray'>Color: {item.color}</span>

                  <span className='text-sm text-title'>{item.price}</span>
                </div>
              </div>
            </div>
            <Button size='large' className='!px-6 !py-1.5' type='primary'>
              Add to cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
