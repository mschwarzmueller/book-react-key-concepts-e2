import { useState } from 'react';

import classes from './Todos.module.css';

function Todos() {
  const [todos, setTodos] = useState([]);

  function addTodoAction(fd) {
    const todo = {
      id: new Date().toISOString(),
      title: fd.get('title'),
    };
    setTodos((prevTodos) => [todo, ...prevTodos]);
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
