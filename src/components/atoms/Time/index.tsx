import React from 'react';

interface TimeProps {
  value: string;
  label: string;
}
const Time = ({ value, label }: TimeProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='min-w-[60px] bg-white p-[10px] text-center text-[34px] font-medium tracking-[-0.6px] text-active dark:bg-bgDark dark:text-white'>
        {value}
      </div>
      <p className='m-0 text-xs text-active dark:text-white'>{label}</p>
    </div>
  );
};

export default Time;
