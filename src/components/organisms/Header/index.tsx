import React from 'react';

import Discount from '@/components/atoms/Discount';
import Menu from '@/components/atoms/Menu';

const Header = () => {
  return (
    <div className='flex flex-col'>
      <Discount />
      <Menu />
    </div>
  );
};

export default Header;
