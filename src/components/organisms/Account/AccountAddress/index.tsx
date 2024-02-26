import { Col, Row } from 'antd';
import React from 'react';

import { AccountAddressItem } from '@/components/atoms/AccountAddressItem';

export function AccountAddress() {
  return (
    <div className='flex flex-col gap-5 pb-20 pt-10 md:pt-0'>
      <h1 className='m-0 p-0 text-xl font-semibold text-title'>Address</h1>
      <Row gutter={[24, 24]}>
        <Col xs={24} xl={12}>
          <AccountAddressItem
            name='John Doe'
            address='345 Long Island, NewYork, United States'
            phone='(+1) 234 567 890'
          />
        </Col>

        <Col xs={24} xl={12}>
          <AccountAddressItem
            name='John Doe'
            address='345 Long Island, NewYork, United States'
            phone='(+1) 234 567 890'
          />
        </Col>

        <Col xs={24} xl={12}>
          <AccountAddressItem
            name='John Doe'
            address='345 Long Island, NewYork, United States'
            phone='(+1) 234 567 890'
          />
        </Col>
      </Row>
    </div>
  );
}
