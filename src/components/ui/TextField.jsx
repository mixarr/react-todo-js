import React from 'react';

export const TextField = ({ value, setValue, ...props }) => {
  return (
    <input
      className='custom-input'
      type='text'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      {...props}
    />
  );
};
