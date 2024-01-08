'use client';
import { Select } from 'antd';
import clsx from 'clsx';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

import UserAvatar from '@/components/atoms/UserAvatar';

const menu = [
  {
    value: 'account',
    label: 'Account',
  },
  {
    value: 'address',
    label: 'Address',
  },
  {
    value: 'orders',
    label: 'Orders',
  },
  {
    value: 'wishlist',
    label: 'Wishlist',
  },
  {
    value: 'logout',
    label: 'Logout',
  },
];

export function UserSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams<{ id: string }>();

  const getView = searchParams.get('view') || 'account';

  const handleMenuClick = (key: string) => {
    if (key === 'logout') {
      router.push('/');
      return;
    }
    router.push(`/account/${params.id}?view=${key}`);
  };

  return (
    <div className='h-fit w-full rounded-lg bg-textDarkGray px-4 py-10 md:w-[unset]'>
      <UserAvatar />
      {/* for desktop */}
      <div className='mt-10 hidden w-[230px] flex-col gap-3 md:flex'>
        {menu.map((item) => (
          <div
            onClick={() => handleMenuClick(item.value)}
            key={item.value}
            className={clsx(
              'flex h-[42px] cursor-pointer items-center justify-between py-2 hover:text-title',
              item.value === getView ? 'border-b-1 text-title' : 'text-gray',
            )}
          >
            <span className={clsx('text-base font-semibold')}>{item.label}</span>
          </div>
        ))}
      </div>

      {/* for mobile */}
      <div className='mt-10 block md:hidden'>
        <Select
          className='border-2-account h-12 w-full'
          defaultValue={getView}
          onChange={handleMenuClick}
          options={menu}
        />
      </div>
    </div>
  );
}
