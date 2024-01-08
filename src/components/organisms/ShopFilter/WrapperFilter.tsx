'use client';
import { Button, Drawer } from 'antd';
import Image from 'next/image';
import type { PropsWithChildren } from 'react';
import React from 'react';

export default function WrapperFilter(props: PropsWithChildren) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const onClose = () => setOpen(false);

  return (
    <>
      {/* for desktop */}
      <div className='hidden py-[60px] pl-[160px] md:block'>
        <div className={'w-[300px]'}>{children}</div>
      </div>

      {/* for mobile */}

      <div className='block md:hidden'>
        <div className='flex items-center justify-center py-3'>
          <Button
            type='text'
            icon={<Image alt='filter-icon' src={'/filter-icon.svg'} width={24} height={24} />}
            size={'large'}
            onClick={() => setOpen(true)}
          >
            Filter
          </Button>
        </div>

        <Drawer
          title='Filter'
          placement={'bottom'}
          size='large'
          closable={true}
          onClose={onClose}
          open={open}
          rootClassName='drawer-filter'
        >
          <div className={'w-full'}>{children}</div>
        </Drawer>
      </div>
    </>
  );
}
