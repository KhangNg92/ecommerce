'use client';
import { Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { SetStateAction } from 'react';
import React from 'react';

import Logo from '@/assets/images/logo.png';
import { DarkModeIcon, HelpIcon, LightModeIcon } from '@/assets/svg';
/* eslint import/no-cycle: 0 */
import { menuList } from '@/components/organisms/Menu';

interface MenuMobileProps {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<SetStateAction<boolean>>;
}

const MenuMobile = ({ isOpenMenu, setIsOpenMenu }: MenuMobileProps) => {
  const pathname = usePathname();
  const onClose = () => {
    setIsOpenMenu(false);
  };

  return (
    <>
      <Drawer
        title={<Image src={Logo} alt='logo' />}
        placement='right'
        size='large'
        onClose={onClose}
        open={isOpenMenu}
        className='custom-drawer'
        footer={
          <div className='mt-4 flex flex-col gap-4'>
            <div className='flex items-center justify-between p-3'>
              <div className='flex items-center gap-3'>
                <HelpIcon />{' '}
                <span className='text-[15px] font-semibold text-gray'>Help & getting started</span>
              </div>
              <span className='flex h-6 w-6 items-center justify-center rounded-[6px] bg-error text-[15px] font-semibold text-white'>
                8
              </span>
            </div>
            <div className='flex h-10 items-center gap-1 rounded-[40px] bg-bgWhiteGray p-1'>
              <button className='flex h-8 flex-1 cursor-pointer items-center justify-center gap-2 rounded-[32px] border-0 bg-bgWhiteLight px-2 py-1'>
                <LightModeIcon />
                <span>Light</span>
              </button>
              <button className='flex h-8 flex-1 cursor-pointer items-center justify-center gap-2 border-0 bg-transparent p-0'>
                <DarkModeIcon />
                <span>Dark</span>
              </button>
            </div>
          </div>
        }
      >
        <ul className='flex list-none flex-col gap-2 p-0'>
          {menuList.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className={`${
                  pathname === item.href ? 'rounded-xl bg-textDarkGray text-active' : ''
                } flex items-center gap-3 p-3 text-[15px] font-semibold text-gray`}
              >
                <span>{<item.icon />}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default MenuMobile;
