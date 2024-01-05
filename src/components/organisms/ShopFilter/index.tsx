'use client';
/* eslint-disable no-console */
import './styles.scss';

import type { IShopFilterState } from '@/interfaces/shop.interfaces';

import Filter from './Filter';
import WrapperFilter from './WrapperFilter';

export default function ShopFilter() {
  const handleChange = (value: IShopFilterState) => {
    console.log(value);
  };

  return (
    <WrapperFilter>
      <Filter onChange={handleChange} />
    </WrapperFilter>
  );
}
