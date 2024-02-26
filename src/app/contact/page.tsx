'use client';
import { Breadcrumb } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ContactBG from '@/assets/images/contact_bg.png';
import MapBG from '@/assets/images/map_bg.png';
import { AddressIcon, ArrowBlackIcon, EmailContactIcon, PhoneIcon } from '@/assets/svg';
import Newsletter from '@/components/organisms/Newsletter';

const data = {
  title: 'We believe in sustainable decor. We’re passionate about life at home.',
  description:
    'Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present',
  about_us: {
    domain: 'wwwlan',
    text1: 'is a gift & decorations store based in HCMC, Vietnam. Est since 2019.',
    text2: 'Our customer service is always prepared to support you 24/7',
  },
  contact_us: [
    {
      id: 1,
      icon: <AddressIcon />,
      title: 'Address',
      description: '234 Hai Trieu, Ho Chi Minh City, Viet Nam',
    },
    {
      id: 2,
      icon: <PhoneIcon />,
      title: 'Contact us',
      description: '+84 234 567 890',
    },
    {
      id: 3,
      icon: <EmailContactIcon />,
      title: 'Email',
      description: 'hello@3legant.com',
    },
  ],
};

const Contact = () => {
  return (
    <>
      <div className='m-auto flex w-full max-w-screen-xl flex-col px-5 pb-[80px] pt-4 md:px-40'>
        <Breadcrumb
          className='mb-10'
          items={[
            {
              title: <Link href={'/'}>Home</Link>,
            },
            {
              title: <Link href={'/contact'}>Contact Us</Link>,
            },
          ]}
        />
        <div className='mb-[48px]'>
          <h1 className='mb-6 max-w-[834px] text-[28px] font-medium leading-[34px] tracking-[-0.6px] text-active md:text-[54px] md:leading-[58px] md:tracking-[-1px]'>
            {data.title}
          </h1>
          <p className='m-0 max-w-[834px] text-base'>{data.description}</p>
        </div>
        <div className='mb-[48px] flex flex-col items-center gap-[62px] bg-bgWhiteLight md:flex-row md:gap-[72px]'>
          <div className='w-full flex-1'>
            <Image src={ContactBG} className='h-auto w-full object-cover' alt='image' />
          </div>
          <div className='px-4 pb-[62px] md:p-0'>
            <h4 className='mb-4 text-[40px] font-medium tracking-[-0.4px] text-active'>About Us</h4>
            <strong className='text-base'>{data.about_us.domain}</strong>
            <span className='text-base'> {data.about_us.text1}</span>
            <span className='mb-6 block text-base'> {data.about_us.text2}</span>
            <Link
              href={'/shop'}
              className='inline-flex items-center gap-1 border-0 border-b-[1px] border-solid border-active'
            >
              Shop Now <ArrowBlackIcon />
            </Link>
          </div>
        </div>
        <div className='mb-10 flex flex-col items-center'>
          <h4 className='mb-10 text-[40px] font-medium tracking-[-0.4px] text-active'>
            Contact Us
          </h4>
          <div className='flex w-full flex-1 flex-col justify-between gap-4 md:flex-row md:gap-6'>
            {data.contact_us.map((item) => (
              <div
                key={item.id}
                className='flex flex-1 flex-col items-center gap-4 bg-bgWhiteLight px-8 py-4'
              >
                {item.icon}
                <div className='flex flex-col items-center gap-2'>
                  <p className='m-0 text-base font-bold uppercase text-gray'>{item.title}</p>
                  <p className='m-0 text-center text-base font-semibold text-active'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col-reverse gap-6 md:flex-row md:gap-7'>
          <div className='flex-1'>
            <form className='flex flex-col gap-4 md:gap-6'>
              <div className='flex flex-col'>
                <label htmlFor='full_name' className='mb-3 text-xs font-bold uppercase text-gray'>
                  Full name
                </label>
                <input
                  type='text'
                  className='rounded-[6px] border border-solid border-textDarkGray px-4 py-[6px] text-base text-gray'
                  id='full_name'
                  placeholder='Your Name'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='email' className='mb-3 text-xs font-bold uppercase text-gray'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='rounded-[6px] border border-solid border-textDarkGray px-4 py-[6px] text-base text-gray'
                  id='email'
                  placeholder='Your Email'
                />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='message' className='mb-3 text-xs font-bold uppercase text-gray'>
                  Message
                </label>
                <textarea
                  rows={5}
                  className='rounded-[6px] border border-solid border-textDarkGray px-4 py-[6px] text-base text-gray'
                  id='message'
                  placeholder='Your message'
                />
              </div>
              <button
                type='submit'
                className='m-auto max-w-[200px] cursor-pointer rounded-[8px] border-0 bg-bgDarkGray px-10 py-[6px] text-base font-medium leading-[28px] text-white md:m-0'
              >
                Send Message
              </button>
            </form>
          </div>
          <div className='flex-1'>
            <div className='w-full flex-1'>
              <Image src={MapBG} className='h-auto w-full object-cover' alt='image' />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
    </>
  );
};

export default Contact;
