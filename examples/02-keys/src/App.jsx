import { useState } from 'react';

function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  function handleChangeTodoText(event) {
    setEnteredTodoText(event.target.value);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    setTodos((curTodos) => [
      { id: new Date().toISOString(), text: enteredTodoText },
      ...curTodos,
    ]);
    setEnteredTodoText('');
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label>Todo</label>
        <input
          type="text"
          onChange={handleChangeTodoText}
          value={enteredTodoText}
        />
        <button>Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
