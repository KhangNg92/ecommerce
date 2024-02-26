'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import NewsletterDarkBg from '@/assets/images/new-letters-dark-bg.png';
import NewsletterBg from '@/assets/images/news-letter-bg.png';
import { EmailIcon } from '@/assets/svg';

const Newsletter = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative flex flex-col bg-bgWhiteGray px-8 py-[95px] dark:bg-active md:flex-row md:p-0'>
      <Image
        className='hidden h-auto w-full object-cover md:block'
        src={isDark ? NewsletterDarkBg : NewsletterBg}
        alt='bg'
      />
      <div className='md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2'>
        <h2 className='mb-2 text-center text-[28px] font-medium tracking-[-0.4px] text-active dark:text-white md:text-left md:text-[40px]'>
          Join Our Newsletter
        </h2>
        <p className='mb-11 text-center text-[18px] text-active dark:text-white md:text-left'>
          Sign up for deals, new products and promotions
        </p>
        <form className='flex max-w-[488px] items-center gap-2 border-0 border-b-[1px] border-solid py-3'>
          <EmailIcon />
          <input
            className='flex-1 border-0 bg-transparent text-base font-medium text-gray'
            type='email'
            placeholder='Email address'
          />
          <button className='cursor-pointer border-0 bg-transparent text-black dark:text-gray'>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
