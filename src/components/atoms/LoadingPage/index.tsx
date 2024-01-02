import { Spin } from 'antd';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Spin />
    </div>
  );
};

export default LoadingPage;
