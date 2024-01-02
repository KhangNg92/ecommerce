import { Empty } from 'antd';
import React from 'react';

import { TRANSLATION_KEYS } from '@/common/locales';

const Custom404 = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Empty description={TRANSLATION_KEYS.ROOT.PAGE_NOT_FOUND} />
    </div>
  );
};

export default Custom404;
