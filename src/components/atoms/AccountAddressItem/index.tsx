import './styles.scss';

import { Button } from 'antd';
import React from 'react';

import { EditIcon } from '@/assets/svg/Edit';

type AccountAddressItemProps = {
  name: string;
  phone: string;
  address: string;
};

export function AccountAddressItem(props: AccountAddressItemProps) {
  const { name, phone, address } = props;
  return (
    <div className='account-address-item'>
      <div className='account-address-item__header'>
        <h3>Billing Address</h3>
        <Button type='text' className='action-edit'>
          <EditIcon />
          <span>Edit</span>
        </Button>
      </div>
      <div className='account-address-item__content'>
        <span>{name}</span>
        <span>{phone}</span>
        <span>{address}</span>
      </div>
    </div>
  );
}
