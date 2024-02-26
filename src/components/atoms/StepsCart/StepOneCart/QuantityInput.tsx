import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';

import { Descrement, Increment } from '@/assets/svg';
import { useCheckoutStore } from '@/stores/checkout-store';

import type { CardItemProps } from '../../CardItem';

interface Props {
  item: CardItemProps;
}

export default function QuantityInput({ item }: Props) {
  const handleChangeAddItem = useCheckoutStore((state) => state.changeAddQuantityProduct);
  const handleChangeSubItem = useCheckoutStore((state) => state.changeSubQuantityProduct);
  const changeValueQuantityInput = useCheckoutStore((state) => state.changeValueQuantityInput);
  const [valueInput, setValueInput] = useState(1);
  useEffect(() => {
    setValueInput(item?.quantity || 1);
  }, [item]);
  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeValueQuantityInput(item.id, Number(e?.target?.value));
  };
  return (
    <div className='relative flex w-full  items-center'>
      <button
        type='button'
        disabled={item?.quantity === 1 || !item?.quantity}
        onClick={() => handleChangeAddItem(item.id)}
        id='decrement-button'
        data-input-counter-decrement='quantity-input'
        className={`flex h-[32px] items-center bg-white px-1 ${
          (item?.quantity === 1 || !item?.quantity) && 'cursor-not-allowed'
        } `}
        style={{
          borderTopLeftRadius: '5px',
          borderBottomLeftRadius: '5px',
          border: '1px solid #6F767E',
          borderRight: 'none',
        }}
      >
        <Increment />
      </button>
      <div className='flex w-[30px] justify-center bg-white '>
        <input
          type='text'
          className=' h-[32px] w-[33px] bg-white text-center text-tiny font-semibold outline-none '
          style={{
            border: '1px solid #6F767E',
            borderLeft: 'none',
            borderRight: 'none',
          }}
          placeholder='999'
          value={valueInput}
          onChange={handleChangeInputValue}
          required
        />
      </div>
      <button
        type='button'
        onClick={() => handleChangeSubItem(item.id)}
        id='increment-button'
        data-input-counter-increment='quantity-input'
        className='h-[32px] bg-white px-1'
        style={{
          borderTopRightRadius: '5px',
          borderBottomRightRadius: '5px',
          border: '1px solid #6F767E',
          borderLeft: 'none',
        }}
      >
        <Descrement />
      </button>
    </div>
  );
}
