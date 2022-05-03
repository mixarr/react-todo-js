import React, {useState} from 'react';
import { Button } from './ui/Button';
import { TextField } from './ui/TextField';

export const TodoForm = ({addTodo}) => {

  const [inputValue, setInputValue] = useState('');

  function createNewTodo(e) {
    e.preventDefault();
    if (inputValue.length !== 0) {
      addTodo(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className='todo-form'>
      <h3 className='todo-form__title'>Create a new todo</h3>
      <form className="todo-form__body" onSubmit={createNewTodo}>
        <TextField 
          value={inputValue}
          setValue={setInputValue}
        />
        <Button type="submit" onSubmit={createNewTodo}>
          Create new Todo
        </Button>
      </form>
    </div>
  );
};