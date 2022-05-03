import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, updateTodo, changeTodo, deleteTodo }) => {
  const setup = () => {
    if (todos.length === 0) {
      return <h3>Todo list is empty!</h3>;
    }

    return (
      <div className='todo-list'>
        {todos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              id={item.id}
              target={item.target}
              isCompleted={item.isCompleted}
              updateTodo={updateTodo}
              changeTodo={changeTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    );
  };

  return setup();
};
