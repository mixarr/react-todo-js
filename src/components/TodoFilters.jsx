import React from 'react';

export const TodoFilters = ({ filter, filters, setupFilter }) => {
  return (
    <div className='todo-filters'>
      <h3 className='todo-filters__title'>Todo filters</h3>
      <div className='todo-filters__buttons'>
        {filters.map((item, index) => (
          <button
            key={index}
            style={
              filter === item
                ? { backgroundColor: '#682da6', color: '#ffffff' }
                : { backgroundColor: '#e2e2e2', color: '#000000' }
            }
            onClick={() => setupFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};
