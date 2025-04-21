import { useActionState } from 'react';

function App() {
  async function storeTodoAction(prevState, formData) {
    const todoTitle = formData.get('title');

    if (!todoTitle || todoTitle.trim() === '') {
      return {
        error: 'Title must not be empty.',
      };
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: todoTitle }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const todo = await response.json();
    console.log(todo);
    return {
      error: null,
    };
  }

  const [formState, formAction] = useActionState(storeTodoAction, {
    error: null,
  });

  return (
    <>
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        {formState.error && <p className="errors">{formState.error}</p>}
        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
    </>
  );
}

export default App;
