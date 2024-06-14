'use client';

import { useEffect, useRef, useState } from 'react';

export default function UserTodos() {
  const todoRef = useRef(null);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    setTodos(storedTodos ? JSON.parse(storedTodos) : []);
  }, []);

  function handleAddTodo(event) {
    event.preventDefault();
    const todo = todoRef.current.value.trim();
    if (!todo) {
      alert('Please enter a todo');
      return;
    }
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    const storedTodos = localStorage.getItem('todos');
    localStorage.setItem(
      'todos',
      JSON.stringify(
        storedTodos ? [...JSON.parse(storedTodos), newTodo] : [newTodo]
      )
    );
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Your to-do" ref={todoRef} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
