import { useFormStatus } from 'react-dom';
import { useOptimistic } from 'react';

import { saveTodo, getTodos } from './todos.js';
import { useState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? 'Saving' : 'Store'} Todo</button>
  );
}

function App() {
  const loadedTodos = getTodos(); // initial fetch
  const [todos, setTodos] = useState(loadedTodos);

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (currentState, optimisticValue) => {
      return [
        ...currentState,
        { ...optimisticValue, id: 'temp'},
      ];
    }
  );

  async function storeTodoAction(formData) {
    const todo = { title: formData.get('title') };
    addOptimisticTodo(todo);
    const newTodo = await saveTodo(todo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
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
        {optimisticTodos.length === 0 && <p>No todos found.</p>}
        {optimisticTodos.length > 0 && (
          <ul>
            {optimisticTodos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
