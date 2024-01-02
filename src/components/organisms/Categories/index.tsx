import React from 'react';

import Bedroom from '@/assets/images/bedroom.png';
import Kitchen from '@/assets/images/kitchen.png';
import LivingRoom from '@/assets/images/livingroom.png';
import { BathroomIcon, DiningRoomIcon, LoungeIcon, MoreCategoriesIcon } from '@/assets/svg';
import CategoryItem from '@/components/atoms/CategoryItem';

const Categories = () => {
  return (
    <div className='m-auto flex w-full max-w-screen-xl flex-col gap-2 px-5 pt-8 md:gap-3 md:px-40 md:py-20'>
      <div className='flex flex-col flex-wrap gap-2 md:flex-row md:gap-3'>
        <div className='flex-1'>
          <CategoryItem mode='large' title='Living Room' href='/' image={LivingRoom} />
        </div>
        <div className='flex flex-1 flex-col gap-2 md:gap-3'>
          <CategoryItem mode='small' showFlexRow title='Bedroom' href='/' image={Bedroom} />{' '}
          <CategoryItem mode='small' showFlexRow title='Kitchen' href='/' image={Kitchen} />
        </div>
      </div>
      <div className='flex flex-wrap gap-2 md:gap-3'>
        <div className='flex flex-1 flex-wrap gap-2 md:gap-3'>
          <CategoryItem mode='icon' title='Bathroom' href='/' icon={<BathroomIcon />} />
          <CategoryItem mode='icon' title='Dining room' href='/' icon={<DiningRoomIcon />} />
        </div>
        <div className='flex flex-1 flex-wrap gap-2 md:gap-3'>
          <CategoryItem mode='icon' title='Lounge' href='/' icon={<LoungeIcon />} />
          <CategoryItem
            mode='icon'
            title='More categories'
            href='/'
            icon={<MoreCategoriesIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
