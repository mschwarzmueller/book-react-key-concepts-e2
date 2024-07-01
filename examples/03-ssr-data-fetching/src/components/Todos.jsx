import { useEffect, useState } from 'react';

import classes from './Todos.module.css';
import { loadTodos, saveTodo } from '../todos.js';

function Todos() {
  const [todos, setTodos] = useState();

  useEffect(() => {
    async function fetchTodos() {
      const todos = await loadTodos();
      setTodos(todos);
    }
    fetchTodos();
  }, []);

  async function addTodoAction(fd) {
    const todo = {
      title: fd.get('title'),
    };
    const savedTodo = await saveTodo(todo);
    setTodos((prevTodos) => [savedTodo, ...prevTodos]);
  }

  return (
    <section className={classes.todos}>
      <h2>Manage your todos</h2>
      <form action={addTodoAction}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
      {(!todos || todos.length === 0) && (
        <p className={classes.fallback}>No todos found.</p>
      )}
      {todos && todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Todos;
