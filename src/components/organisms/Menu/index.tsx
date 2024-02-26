'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';

import {
  BurgerMenuIcon,
  CartIcon,
  HomeIcon,
  MyAccountIcon,
  ProductsIcon,
  ProfileIcon,
  SearchIcon,
  ShopIcon,
} from '@/assets/svg';
import { LogoIcon } from '@/assets/svg/LogoIcon';
import { SwitchMode } from '@/components/atoms/SwitchMode';
import { useCheckoutStore } from '@/stores/checkout-store';

// eslint-disable-next-line import/no-cycle
import MenuMobile from './MenuMobile';

export const menuList = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    icon: HomeIcon,
  },
  {
    id: 2,
    name: 'Shop',
    href: '/shop',
    icon: ShopIcon,
  },
  {
    id: 3,
    name: 'Product',
    href: '/product',
    icon: ProductsIcon,
  },
  {
    id: 4,
    name: 'My Account',
    href: '/my-account',
    icon: MyAccountIcon,
  },
  {
    id: 5,
    name: 'Contact Us',
    href: '/contact',
    icon: MyAccountIcon,
  },
];

const Menu = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [numberCart, setNumberCart] = useState<number>(0);
  const cartStore = useCheckoutStore((state) => state.cartStore);
  useEffect(() => {
    setNumberCart(cartStore?.length || 0);
  }, [cartStore]);

  return (
    <div className='m-auto flex w-full max-w-screen-xl items-center justify-between px-5 py-4 md:px-40'>
      <div className='max-w-28 flex items-center gap-3'>
        <button
          onClick={() => setIsOpenMenu(true)}
          className='flex h-[18px] cursor-pointer items-end border-0 bg-transparent md:hidden'
        >
          <BurgerMenuIcon />
        </button>
        <LogoIcon />
      </div>
      <ul className='m-0 hidden list-none items-center gap-10 md:flex'>
        {menuList?.map((menu) => (
          <Fragment key={menu.id}>
            {menu.id !== 4 && (
              <li key={menu.id}>
                <Link
                  className={`text-gray ${
                    pathname === menu.href ? 'text-active dark:text-white' : ''
                  }`}
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      {/* cart for mobile */}
      <Link
        href={'/cart'}
        className='relative block cursor-pointer border-0 bg-transparent p-0 md:hidden'
      >
        <CartIcon />
        <span className='absolute -top-2 left-[14px] z-[-1] flex h-5 w-5 items-center justify-center rounded-full bg-bgError text-xs font-bold text-white'>
          {numberCart}
        </span>
      </Link>
      <div className='hidden items-center gap-4 md:flex'>
        <button className='cursor-pointer border-0 bg-transparent p-0'>
          <SearchIcon />
        </button>
        <Link href={'/account/demo'} className='cursor-pointer border-0 bg-transparent p-0'>
          <ProfileIcon />
        </Link>
        <Link href={'/cart'} className='relative cursor-pointer border-0 bg-transparent p-0'>
          <CartIcon />
          <span className='absolute -top-2 left-[14px] z-[-1] flex h-5 w-5 items-center justify-center rounded-full bg-bgError text-xs font-bold text-white'>
            {numberCart}
          </span>
        </Link>
        <SwitchMode />
      </div>
      <MenuMobile isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </div>
  );
};

export default Menu;
