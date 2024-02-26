import { useState } from 'react';

import { DownIcon } from '@/assets/svg';

interface CountryData {
  id: number;
  country: string;
  value: string;
}

interface Props {
  onChange?: (value: string) => void;
  value?: string;
  errorMessage?: string;
  countryData: CountryData[];
}
export default function Select({ countryData, errorMessage, onChange, value }: Props) {
  const [country, setCountry] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: valueCountry } = event.target;
    setCountry(valueCountry);
    if (onChange) {
      onChange(valueCountry);
    }
  };
  return (
    <div className='mt-6'>
      <label htmlFor='countries' className='mb-3 block text-xs font-semibold uppercase text-gray'>
        Country *
      </label>
      <div className='relative'>
        <select
          value={country}
          name='country'
          onChange={handleChange}
          className=' border-gray-300 text-gray-900 block w-full appearance-none  rounded-lg border bg-white p-2.5 text-sm outline-none'
        >
          <option defaultChecked>Country</option>
          {countryData.map((item) => (
            <option value={item.value} key={item.id}>
              {item.country}
            </option>
          ))}
        </select>
        <div className='absolute  right-3 top-4 flex'>
          <DownIcon />
        </div>
      </div>
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  );
}
