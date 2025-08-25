import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const initialTodos = [
  { id: 1, text: 'Learn React', completed: false },
  { id: 2, text: 'Write tests', completed: false },
];

export default function TodoList() {
  const [todos, setTodos] = useState([
  { id: 1, text: 'Learn React' },
]);

const handleDelete = (id) => {
  setTodos(prev => prev.filter(todo => todo.id !== id));
};


  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => (<li key={todo.id} data-testid={`todo-${todo.id}`}>
    {todo.text}
    <button onClick={() => handleDelete(todo.id)}>Delete</button>
  </li>
)
      //todo.id === id ? { ...todos, completed: !todos.completed } : todos
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            data-testid={`todo-${todo.id}`}
          >
            {todo.text}
            <button onClick={(e) => { e.stopPropagation(); deleteTodo(todo.id); }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}