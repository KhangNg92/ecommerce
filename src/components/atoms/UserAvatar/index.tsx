import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

import { CameraIcon } from '@/assets/svg/Camera';

export default function UserAvatar() {
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <div className='relative h-20 w-20 rounded-full'>
        <Image
          className='rounded-full'
          width={80}
          height={80}
          src='https://via.placeholder.com/150'
          alt='user avatar'
        />
        <Button
          icon={<CameraIcon />}
          className='absolute bottom-0 right-0 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-title text-white'
        />
      </div>
      <h2 className='text-xl font-semibold text-title dark:text-white'>John Doe</h2>
    </div>
  );
}
