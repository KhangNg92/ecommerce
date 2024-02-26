'use client';
import React from 'react';

import { CheckIcon } from '@/assets/svg';

import StepThreeCart from './SetThreeCart';
import StepOneCart from './StepOneCart';
import StepTwoCart from './StepTwoCart';

export default function Steps() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const steps = [
    {
      title: 'Shopping cart',
      component: <StepOneCart setCurrentStep={setCurrentStep} />,
    },
    {
      title: 'Checkout details',
      component: <StepTwoCart setCurrentStep={setCurrentStep} />,
    },
    {
      title: 'Order complete',
      component: <StepThreeCart />,
    },
  ];
  return (
    <div className='pb m-auto flex w-full max-w-screen-xl flex-col gap-2 pt-6 '>
      <div className='flex justify-center'>
        <div className='grid w-[832px] grid-cols-1 gap-7 md:grid-cols-3 '>
          {/* step on desktop */}
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item hidden md:block ${currentStep === i + 1 && 'active'} ${
                i + 1 < currentStep && 'complete'
              } `}
            >
              <div className='flex items-center'>
                <div className={`step  ${currentStep !== i + 1 && 'bg-gray'}`}>
                  {i + 1 < currentStep ? <CheckIcon /> : i + 1}
                </div>
                <h6
                  className={`m-0 text-[16px] text-[#1F2224] ${
                    currentStep !== i + 1 && 'text-gray'
                  } ${i + 1 < currentStep && 'text-[#83BF6E]'} `}
                >
                  {step.title}
                </h6>
              </div>
              <div
                className={` ${currentStep === i + 1 && 'mt-[26px] h-[2px] w-full bg-black'}  ${
                  currentStep === steps.length + 1 && 'hidden'
                } `}
              />
              <div
                className={`  ${i + 1 < currentStep && 'mt-[26px] h-[2px] w-full bg-[#83BF6E]'}`}
              />
            </div>
          ))}
          {/* step on mobile */}
          <div className={'step-item block md:hidden'}>
            <div className='grid grid-cols-6'>
              <div className='col-span-5 mr-[22px] '>
                <div className='flex items-center'>
                  <div className={'step bg-gray'}>{currentStep}</div>
                  <h6 className={'m-0 text-[16px] text-[#1F2224] '}>
                    {steps[currentStep - 1]?.title}
                  </h6>
                </div>
                <div className={'mt-[26px] h-[2px] w-full bg-black'} />
              </div>
              <div className='col-span-1 '>
                <div className={`step !mr-0 bg-gray ${steps.length === currentStep && '!hidden'}`}>
                  {currentStep + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {steps?.map((step, i) => (
        <div key={i}>{currentStep === i + 1 && step.component}</div>
      ))}
    </div>
  );
}
