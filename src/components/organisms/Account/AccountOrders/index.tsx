import { Table } from 'antd';
import React from 'react';

const dataSource = [
  {
    id: '#3456_768',
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
  {
    id: '#3456_768',
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
  {
    id: '#3456_768',
    date: 'October 17, 2023',
    status: 'Delivered',
    price: '$1234.00',
  },
];

const columns = [
  {
    title: 'Number ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Dates',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

export function AccountOrders() {
  return (
    <div className='flex flex-col gap-5 pb-20 pt-10 md:pt-0'>
      <h1 className='m-0 p-0 text-xl font-semibold text-title'>Orders History</h1>
      {/* for desktop */}
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        className='hidden md:block'
      />

      {/* for mobile */}
      <div className='flex flex-col gap-8 md:hidden'>
        {dataSource.map((item) => (
          <div key={item.id} className='border-b-1 flex flex-col gap-4 !border-textDark pb-4'>
            <div className='flex items-start justify-between'>
              <span>Number ID</span>
              <span>{item.id}</span>
            </div>
            <div className='flex items-start justify-between'>
              <span>Dates</span>
              <span>{item.date}</span>
            </div>
            <div className='flex items-start justify-between'>
              <span>Status</span>
              <span>{item.status}</span>
            </div>
            <div className='flex items-start justify-between'>
              <span>Price</span>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
