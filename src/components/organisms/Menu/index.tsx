'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { Fragment, useState } from 'react';

import Logo from '@/assets/images/logo.png';
import {
  BurgerMenuIcon,
  CartIcon,
  DarkModeIcon,
  HomeIcon,
  LightModeIcon,
  MyAccountIcon,
  ProductsIcon,
  ProfileIcon,
  SearchIcon,
  ShopIcon,
} from '@/assets/svg';

/* eslint import/no-cycle: 0 */
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
    href: '/contact-us',
    icon: MyAccountIcon,
  },
];

const Menu = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className='m-auto flex w-full max-w-screen-xl items-center justify-between px-5 py-4 md:px-40'>
      <div className='max-w-28 flex items-center gap-3'>
        <button
          onClick={() => setIsOpenMenu(true)}
          className='flex h-[18px] cursor-pointer items-end border-0 bg-transparent md:hidden'
        >
          <BurgerMenuIcon />
        </button>
        <Image src={Logo} alt='logo' />
      </div>
      <ul className='m-0 hidden list-none items-center gap-10 md:flex'>
        {menuList?.map((menu) => (
          <Fragment key={menu.id}>
            {menu.id !== 4 && (
              <li key={menu.id}>
                <Link
                  className={`text-gray ${pathname === menu.href ? 'text-active' : ''}`}
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
      <button className='relative block cursor-pointer border-0 bg-transparent p-0 md:hidden'>
        <CartIcon />
        <span className='absolute -top-2 left-[14px] z-[-1] flex h-5 w-5 items-center justify-center rounded-full bg-bgError text-xs font-bold text-white'>
          2
        </span>
      </button>
      <div className='hidden items-center gap-4 md:flex'>
        <button className='cursor-pointer border-0 bg-transparent p-0'>
          <SearchIcon />
        </button>
        <button className='cursor-pointer border-0 bg-transparent p-0'>
          <ProfileIcon />
        </button>
        <button className='relative cursor-pointer border-0 bg-transparent p-0'>
          <CartIcon />
          <span className='absolute -top-2 left-[14px] z-[-1] flex h-5 w-5 items-center justify-center rounded-full bg-bgError text-xs font-bold text-white'>
            2
          </span>
        </button>
        <div className='flex h-10 items-center gap-1 rounded-[40px] bg-bgWhiteGray p-1'>
          <button className='flex h-8 w-[56px] cursor-pointer items-center justify-center rounded-[32px] border-0 bg-bgWhiteLight px-2 py-1'>
            <LightModeIcon />
          </button>
          <button className='h-8 w-[56px] cursor-pointer border-0 bg-transparent p-0'>
            <DarkModeIcon />
          </button>
        </div>
      </div>
      <MenuMobile isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </div>
  );
};

export default Menu;
