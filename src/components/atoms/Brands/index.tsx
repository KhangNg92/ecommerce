import React from 'react';

import M from '@/assets/svg/3M.svg';
import DeWalt from '@/assets/svg/DeWalt.svg';
import HomeDepot from '@/assets/svg/HomeDepot.svg';
import IKEA from '@/assets/svg/IKEA.svg';
import Lowers from '@/assets/svg/Lowes.svg';
import Makita from '@/assets/svg/Makita.svg';

const imageBrands = [Lowers, DeWalt, HomeDepot, IKEA, Makita, M];

const Brands = () => {
  return (
    <div className='hidden h-[160px] w-full items-center justify-evenly gap-[64px] bg-bgWhiteGray px-40 dark:bg-bgDarkGray md:flex'>
      {imageBrands.map((Icon, idx) => (
        <Icon key={`img-${idx}`} className='opacity-50' alt='brand' />
      ))}
    </div>
  );
};

export default Brands;
