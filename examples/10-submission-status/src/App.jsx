import { useActionState } from 'react';

import { saveTodo } from './todos.js';

function App() {
  async function storeTodoAction(prevState, formData) {
    const todoTitle = formData.get('title');

    if (!todoTitle || todoTitle.trim() === '') {
      return {
        error: 'Title must not be empty.',
      };
    }

    await saveTodo({ title: todoTitle });
    return {
      error: null,
    };
  }

  const [formState, formAction, pending] = useActionState(storeTodoAction, {
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
          <button disabled={pending}>
            {pending ? 'Saving' : 'Store'} Todo
          </button>
        </p>
      </form>
    </>
  );
}

export default App;
