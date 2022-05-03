import React from 'react';

export const Checkbox = ({ defaultValue, onChange, labelText }) => {
  return (
    <div className='custom-checkbox'>
      <input
        className='custom-checkbox__input'
        type='checkbox'
        defaultChecked={defaultValue}
        onChange={onChange}
      />
      <label className='custom-checkbox__label'>
        {labelText}
      </label>
    </div>
  );
};
