'use client';
import { Divider } from 'antd';
import _ from 'lodash';
import { useState } from 'react';

import ShopFilterItem from '@/components/atoms/ShopFilterItem';
import type { IShopFilterState, TBaseValueFilter } from '@/interfaces/shop.interfaces';

import {
  mockCategoryData,
  mockPopularBrandsData,
  mockPriceData,
  mockTagData,
  sortByData,
} from './mock';

const initialState: IShopFilterState = {
  sortBy: 'newToOld',
  category: 'electronicsDevices',
  popularBrand: _.map(mockPopularBrandsData, 'value'),
  popularTag: _.map(mockTagData, 'value'),
  range: ['', ''],
};

type FilterProps = {
  onChange?: (value: IShopFilterState) => void;
  defaultValues?: IShopFilterState;
};

export default function Filter(props: FilterProps) {
  const { onChange, defaultValues } = props;
  const [state, setState] = useState<IShopFilterState>(defaultValues ?? initialState);

  const handleChange = (key: keyof IShopFilterState) => (value: TBaseValueFilter) => {
    setState((prev) => {
      const newState = { ...prev, [key]: value };
      onChange?.(newState);
      return newState;
    });
  };

  return (
    <>
      <ShopFilterItem
        title='Sort by'
        value={state.sortBy}
        onChange={handleChange('sortBy')}
        data={sortByData}
        type='radio'
      />

      <Divider orientationMargin={24} />

      <ShopFilterItem
        title='Category'
        value={state.category}
        onChange={handleChange('category')}
        data={mockCategoryData}
        type='radio'
      />

      <Divider orientationMargin={24} />

      <ShopFilterItem
        title='Price Range'
        value={state.range}
        onChange={handleChange('range')}
        data={mockPriceData}
        type='range'
      />

      <Divider orientationMargin={24} />

      <ShopFilterItem
        title={'popular Brands'}
        classNameTitle='text-md uppercase'
        value={state.popularBrand}
        onChange={handleChange('popularBrand')}
        data={mockPopularBrandsData}
        type='checkbox'
      />

      <Divider orientationMargin={24} />

      <ShopFilterItem
        title={'Popular Tag'}
        value={state.popularTag}
        onChange={handleChange('popularTag')}
        data={mockTagData}
        type='tag'
      />
    </>
  );
}
