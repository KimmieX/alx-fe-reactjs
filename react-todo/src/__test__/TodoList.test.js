import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Write tests')).toBeInTheDocument();
});


test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText('Add a todo');
  fireEvent.change(input, { target: { value: 'Write tests' } });
  fireEvent.click(screen.getByText('Add'));

  const todos = screen.getAllByText('Write tests');
  expect(todos.length).toBe(2); // one initial + one added
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  const deleteButtons = screen.getAllByText('Delete');
  fireEvent.click(deleteButtons[0]); // deletes the first todo
  expect(todoItem).not.toBeInTheDocument();
});

