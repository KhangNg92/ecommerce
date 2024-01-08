'use client';
import { Breadcrumb } from 'antd';

export default function ShopBanner() {
  return (
    <div
      className={
        'flex h-[308px] w-full justify-center bg-[url(/shop-banner.png)] bg-cover text-[#111315] md:h-[392px]'
      }
    >
      <div
        className={'flex max-w-[311px] flex-col items-center justify-center gap-6 md:max-w-[413px]'}
      >
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: <a href='#'>Shop</a>,
            },
          ]}
        />
        <h1 className={'m-0 p-0 text-[54px] font-normal'}>Shop Page</h1>
        <span className={'text-md text-center'}>Let’s design the place you always imagined.</span>
      </div>
    </div>
  );
}
