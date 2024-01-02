import Image from 'next/image';
import React from 'react';

import M from '@/assets/images/3M.png';
import DeWalt from '@/assets/images/DeWalt.png';
import HomeDepot from '@/assets/images/HomeDepot.png';
import IKEA from '@/assets/images/IKEA.png';
import Lowe from '@/assets/images/Lowes.png';
import Makita from '@/assets/images/Makita.png';

const imageBrands = [Lowe, DeWalt, HomeDepot, IKEA, Makita, M];

const Brands = () => {
  return (
    <div className='hidden h-[160px] w-full items-center justify-evenly gap-[64px] bg-bgWhiteGray px-40 md:flex'>
      {imageBrands.map((img, idx) => (
        <Image key={`img-${idx}`} className='opacity-50' src={img} alt='brand' />
      ))}
    </div>
  );
};

export default Brands;
