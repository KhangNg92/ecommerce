import React from 'react';

import { StarIcon } from '@/assets/svg';

interface StarProps {
  rate: number;
}

const Star = ({ rate }: StarProps) => {
  return (
    <div className='flex items-center'>
      {Array.from({ length: rate }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
};

export default Star;
