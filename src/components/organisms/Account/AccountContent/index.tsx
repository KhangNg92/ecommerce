'use client';
import { useSearchParams } from 'next/navigation';
import type { ReactNode } from 'react';
import React from 'react';

import { AccountAddress } from '../AccountAddress';
import AccountDetail from '../AccountDetail';
import { AccountOrders } from '../AccountOrders';
import { AccountWishlist } from '../AccountWishlist';

const Content: Record<string, ReactNode> = {
  account: <AccountDetail />,
  address: <AccountAddress />,
  orders: <AccountOrders />,
  wishlist: <AccountWishlist />,
} as const;

export function AccountContent() {
  const searchParams = useSearchParams();
  const getView = searchParams.get('view') || 'account';

  const renderContent = () => {
    return Content[getView] ?? Content.account;
  };

  return <div className='mt-10 w-full md:mt-0 md:px-[72px]'>{renderContent()}</div>;
}
