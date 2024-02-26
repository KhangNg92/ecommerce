import type { InputHTMLAttributes } from 'react';
import React from 'react';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

import type { SchemaFormStepTwo } from './schemaFormStepTwo';

type GrenaricFormStepTwo = {
  [key in keyof SchemaFormStepTwo]: string;
};
type P = keyof GrenaricFormStepTwo;
interface InputCheckProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  placeholder: string;
  register?: UseFormRegister<GrenaricFormStepTwo>;
  rules?: RegisterOptions;
  errorMessage?: string;
  classNameError?: string;
}

export default function InputStepCart({
  title,
  placeholder,
  register,
  name,
  errorMessage,
  rules,
  classNameError = 'mt-1 min-h-[1.25rem] text-xs text-red-600',
  ...rest
}: InputCheckProps) {
  const registerResult = register && name ? register(name as P, rules) : null;

  return (
    <div>
      <div className='mb-3 text-xs font-semibold uppercase text-gray'>{title}</div>
      <input
        placeholder={placeholder}
        {...registerResult}
        {...rest}
        className=' w-full rounded-md border border-solid border-textDarkGray p-3 outline-none'
      />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  );
}
