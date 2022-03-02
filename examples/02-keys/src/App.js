import { useState } from 'react';

function App() {
  const [enteredTodoText, setEnteredTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  function changeTodoTextHandler(event) {
    setEnteredTodoText(event.target.value);
  }

  function addTodoHandler(event) {
    event.preventDefault();
    setTodos((curTodos) => [
      { id: new Date().toISOString(), text: enteredTodoText },
      ...curTodos,
    ]);
    setEnteredTodoText('');
  }

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <label>Todo</label>
        <input
          type="text"
          onChange={changeTodoTextHandler}
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
