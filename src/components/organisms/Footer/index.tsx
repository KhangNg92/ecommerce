import Link from 'next/link';
import React from 'react';

import { FacebookIcon } from '@/assets/svg/Facebook';
import { InstagramIcon } from '@/assets/svg/Instagram';
import { YoutubeIcon } from '@/assets/svg/Youtube';

const icons = [FacebookIcon, InstagramIcon, YoutubeIcon];
const menus = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Categories',
  },
  {
    href: '#',
    label: 'Product',
  },
  {
    href: '#',
    label: 'Blog',
  },
  {
    href: '#',
    label: 'Contact Us',
  },
];

const Footer = () => {
  return (
    <div className='relative inline-flex w-full flex-col items-start gap-[49px] bg-[#111315] px-8 py-12 md:px-[160px] md:pb-[32px] md:pt-[80px]'>
      <div className='relative w-full'>
        <div className='relative flex flex-wrap items-center justify-between gap-5'>
          <div className='relative flex flex-1 flex-col items-center gap-4 md:flex-row md:gap-8  '>
            <div className='relative h-[24px] w-[105px]'>
              <div className='absolute -top-px left-0 whitespace-nowrap text-center text-[24px] font-medium leading-[24px] tracking-[0] text-white'>
                wwwlan.
              </div>
            </div>
            <div className='relative h-px w-6 bg-[#6F767E] md:h-6 md:w-px' />
            <div className='relative w-[350px] text-center text-sm font-normal text-[#F4F4F4] md:text-start'>
              Home &amp; Decor Services
            </div>
          </div>
          <div className='relative mt-10 flex w-full flex-col items-center gap-8 md:mt-0 md:w-[unset] md:flex-row md:items-start md:gap-[40px]'>
            {menus.map((m) => (
              <Link key={m.href} href={'#'}>
                <div className='relative mt-[-1.00px] w-fit whitespace-nowrap font-normal text-white'>
                  {m.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='[ border-top-style:solid] relative flex w-full flex-col-reverse items-start justify-between gap-8 border-t-[0.5px] border-white px-0 py-[16px] md:flex-row md:gap-0'>
        <div className='relative flex w-full flex-col-reverse items-start gap-8 md:w-[unset] md:flex-row md:gap-7'>
          <p className='self-center text-xs font-normal text-[#F4F4F4]'>
            Copyright © 2023 wwwlan. All rights reserved
          </p>
          <div className={'flex gap-7 self-center md:self-start'}>
            <Link href={'#'}>
              <div className='text-xs font-semibold text-white'>Privacy Policy</div>
            </Link>
            <Link href={'#'}>
              <div className='text-xs font-semibold text-white'>Terms of Use</div>
            </Link>
          </div>
        </div>
        <div className='relative flex items-start gap-[24px] self-center'>
          {icons.map((Icon, idx) => (
            <Link href={'#'} key={idx}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
