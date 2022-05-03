import React, { useState } from 'react';

import { TodoFilters } from './components/TodoFilters';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      target: 'Some task 1',
      isCompleted: true,
    },
    {
      id: 2,
      target: 'Some task 2',
      isCompleted: false,
    },
    {
      id: 3,
      target: 'Some task 3',
      isCompleted: true,
    },
  ]);

  const [filter, setFilter] = useState('all');

  const filters = ['all', 'active', 'completed'];

  function setupFilter(_filter) {
    setFilter(_filter);
  }

  function filterTodo(_filter) {
    const filteredTodo = todo.filter((item) => {
      if (_filter === 'active') {
        return !item.isCompleted;
      } else if (_filter === 'completed') {
        return item.isCompleted;
      } else {
        return item;
      }
    });
    return filteredTodo;
  }

  function addTodo(newTargetText) {
    const newTodo = {
      id: todo.length + 1,
      target: newTargetText.trim(),
      isCompleted: false,
    };
    setTodo([...todo, newTodo]);
  }

  function updateTodo(id) {
    const index = todo.findIndex((item) => item.id === id);

    const selectedElement = todo[index];
    selectedElement.isCompleted = !selectedElement.isCompleted;

    const updatedTodo = [...todo];
    updateTodo[index] = selectedElement;

    setTodo(updatedTodo);
  }

  function changeTodoText(id, text) {
    const index = todo.findIndex((item) => item.id === id);

    const selectedElement = todo[index];
    selectedElement.target = text;

    const updatedTodo = [...todo];
    updateTodo[index] = selectedElement;

    setTodo(updatedTodo);
  }

  function deleteTodo(id) {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo([...updatedTodo]);
  }

  return (
    <div className='app'>
      <TodoForm addTodo={addTodo} />
      <TodoFilters
        filter={filter}
        filters={filters}
        setupFilter={setupFilter}
      />
      <TodoList
        todos={filterTodo(filter)}
        updateTodo={updateTodo}
        changeTodo={changeTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
