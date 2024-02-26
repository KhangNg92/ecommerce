/* eslint-disable no-console */
import React from 'react';

interface Props {
  data: ItemTypeDelivery[];
  type: ItemTypeDelivery | undefined;
  onChange: (selectedItem: ItemTypeDelivery) => void;
}
export interface ItemTypeDelivery {
  type: string;
  price?: string;
  icon?: React.JSX.Element;
}

const TypeDelivery = ({ data = [], type, onChange }: Props) => {
  const handleRadioChange =
    (item: ItemTypeDelivery) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(item);
      console.log(event.target.value);
    };

  return (
    <div>
      {data.map((item: ItemTypeDelivery, index: number) => {
        return (
          <div
            onClick={() => onChange(item)}
            className='mb-4 flex flex-row items-center justify-between rounded-[4px] border border-solid border-[#1F2224] px-[13px] py-[16px]'
            key={index}
          >
            <div className='flex flex-row gap-2'>
              <input
                id='default-radio-1'
                type='radio'
                value='one-way'
                name='default-radio'
                defaultChecked={type?.type === 'Free shipping'}
                checked={type?.type === item.type}
                onChange={handleRadioChange(item)}
                className='bg-gray-100 h-18 w-18 border-[#111315] '
              />
              <div className='text-[16px]'>{item.type}</div>
            </div>
            {item?.price && <div className='flex text-[16px]'>{item?.price}</div>}
            {item?.icon && <div className='flex text-[16px]'>{item?.icon}</div>}
          </div>
        );
      })}
    </div>
  );
};
export default TypeDelivery;
