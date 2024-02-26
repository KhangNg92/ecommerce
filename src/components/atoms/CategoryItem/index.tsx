import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ArrowBlackIcon } from '@/assets/svg';

interface CategoryItemProps {
  title: string;
  href: string;
  image?: any;
  icon?: any;
  showFlexRow?: boolean;
  mode?: 'large' | 'small' | 'icon';
  className?: string;
}
const CategoryItem = ({
  title,
  href = '',
  image,
  icon,
  showFlexRow,
  mode,
  className,
}: CategoryItemProps) => {
  return (
    <div
      className={clsx(
        'relative flex flex-1 bg-bgWhiteGray dark:bg-bgDarkGray',
        showFlexRow ? 'flex-row' : 'flex-col',
        mode === 'large' && 'p-6',
        mode === 'small' && 'items-end justify-between pl-8',
        mode === 'icon' && 'px-4 py-8 md:px-8 md:py-12',
        className,
      )}
    >
      {icon && <div className='mb-4'>{icon}</div>}
      <div
        className={clsx(
          mode === 'large' && 'absolute md:ml-6 md:mt-6',
          mode === 'small' && 'mb-10',
        )}
      >
        <h2
          className={clsx(
            'mb-3 text-[28px] font-medium tracking-[-0.6px] text-active dark:text-textDarkGray md:text-[34px] md:leading-[38px]',
            mode === 'icon' && 'mb-2 !text-[17px] leading-[22px] md:!text-[20px] md:leading-[28px]',
          )}
        >
          {title}
        </h2>
        <Link
          href={href}
          className={clsx(
            'inline-flex items-center gap-1 border-0 border-b-2 border-solid border-active text-base text-active dark:border-white dark:text-white',
            mode === 'icon' && 'border-0 border-none !text-gray underline dark:text-white',
          )}
        >
          Shop Now
          <span className='hidden md:flex'>
            <ArrowBlackIcon />
          </span>
        </Link>
      </div>
      <div>
        {image && (
          <Image
            src={image}
            alt='image'
            className={clsx(
              'h-auto max-h-[377px] w-full object-contain md:max-h-[590px]',
              mode === 'small' && 'max-h-[160px]',
            )}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
