'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { DarkModeIcon, LightModeIcon } from '@/assets/svg';

export const SwitchMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const getThemeBtnCls = (isActive: boolean) => {
    return isActive
      ? 'flex h-8 w-[56px] cursor-pointer items-center justify-center rounded-[32px] border-0 bg-bgWhiteLight dark:text-white dark:bg-bgDark px-2 py-1 text-black'
      : 'h-8 w-[56px] cursor-pointer border-0 bg-transparent p-0 text-gray flex items-center justify-center';
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='flex h-10 items-center gap-1 rounded-[40px] bg-bgWhiteGray p-1 dark:bg-[#111315]'>
      <button className={getThemeBtnCls(theme === 'light')} onClick={() => setTheme('light')}>
        <LightModeIcon />
      </button>
      <button className={getThemeBtnCls(theme === 'dark')} onClick={() => setTheme('dark')}>
        <DarkModeIcon />
      </button>
    </div>
  );
};
