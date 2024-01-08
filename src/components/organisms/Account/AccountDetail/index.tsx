'use client';
import { Button, Form, Input } from 'antd';
import React from 'react';

export default function AccountDetail() {
  const [form] = Form.useForm();

  return (
    <div className='account-detail'>
      <Form
        layout={'vertical'}
        form={form}
        size='large'
        name='account-detail'
        className='mt-6 flex flex-col'
      >
        <div>
          <h3 className='pb-6 text-xl font-semibold text-title'>Account Details</h3>
          <Form.Item
            label='FIRST NAME'
            name={'firstName'}
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input placeholder='First name' size='large' />
          </Form.Item>
          <Form.Item
            label='LAST NAME'
            name={'lastName'}
            rules={[
              {
                required: true,
                message: 'Please input your last name!',
              },
            ]}
          >
            <Input placeholder='Last name' size='large' />
          </Form.Item>
          <Form.Item
            label='DISPLAY NAME'
            name={'displayName'}
            rules={[{ required: true, message: 'Please input your display name!' }]}
            // help={
            //   'This will be how your name will be displayed in the account section and in reviews'
            // }
          >
            <Input placeholder='Display name' size='large' />
            <span className='italic'>
              This will be how your name will be displayed in the account section and in reviews
            </span>
          </Form.Item>
          <Form.Item
            label='EMAIL'
            name={'email'}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input placeholder='Email' size='large' />
          </Form.Item>
        </div>

        <div className='mt-10'>
          <h3 className='pb-6 text-xl font-semibold text-title'>Password</h3>
          <Form.Item label='OLD PASSWORD'>
            <Input placeholder='Old password' size='large' />
          </Form.Item>
          <Form.Item label='NEW PASSWORD'>
            <Input placeholder='New password' size='large' />
          </Form.Item>
          <Form.Item label='REPEAT NEW PASSWORD'>
            <Input placeholder='Repeat new password' size='large' />
          </Form.Item>
        </div>

        <Form.Item className='mt-3'>
          <Button type='text' className='bg-title text-white' htmlType='submit'>
            Save changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
