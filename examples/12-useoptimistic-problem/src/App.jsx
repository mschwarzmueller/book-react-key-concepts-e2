import { useFormStatus } from 'react-dom';

import { useState } from 'react';

let storedTodos = [];

export async function saveTodo(todo) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  const newTodo = { ...todo, id: new Date().getTime() };
  storedTodos = [...storedTodos, newTodo];
  return storedTodos;
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? 'Saving' : 'Store'} Todo</button>
  );
}

function App() {
  const [todos, setTodos] = useState(storedTodos);

  async function storeTodoAction(formData) {
    const todo = { title: formData.get('title') };
    const updatedTodos = await saveTodo(todo);
    setTodos(updatedTodos);
  }

  return (
    <>
      <form action={storeTodoAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="actions">
          <SubmitButton />
        </p>
      </form>
      <div id="todos">
        <h2>My Todos</h2>
        {todos.length === 0 && <p>No todos found.</p>}
        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
