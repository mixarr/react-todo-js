import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Checkbox } from './ui/Checkbox';
import { TextField } from './ui/TextField';

export const TodoItem = ({
  id,
  target,
  isCompleted,
  updateTodo,
  changeTodo,
  deleteTodo,
}) => {
  const [isEditItem, setIsEditItem] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const setup = () => {
    if (isEditItem) {
      return (
        <div className='todo-item'>
          <TextField value={inputValue} setValue={setInputValue} />
          <div className='todo-item__actions'>
            <Button onClick={() => setIsEditItem(false)}>Cancel</Button>
            <Button
              onClick={() => {
                changeTodo(id, inputValue);
                setIsEditItem(false);
                setInputValue('')
              }}
            >
              Save
            </Button>
          </div>
        </div>
      );
    }
    return (
      <div className='todo-item'>
        <div className='todo-item__info'>
          <Checkbox
            defaultValue={isCompleted}
            onChange={() => updateTodo(id)}
          />
          <h4>{target}</h4>
        </div>
        <div className='todo-item__actions'>
          <Button onClick={() => setIsEditItem(true)}>Edit</Button>
          <Button onClick={() => deleteTodo(id)}>Delete</Button>
        </div>
      </div>
    );
  };

  return setup();
};
