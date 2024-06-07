import { useState } from 'react';

function App() {
  const [error, setError] = useState(null);

  async function storeTodoAction(formData) {
    console.log('Form action triggered!');
    const todoTitle = formData.get('title');
    if (!todoTitle || todoTitle.trim() === '') {
      setError('Title is required.');
    }
    await new Promise((resolve) => setTimeout(resolve, 3000)); // 3s delay
    console.log('Submission done!');
  }

  return (
    <>
      <form action={storeTodoAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        {error && <p className="errors">{error}</p>}
        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
    </>
  );
}

export default App;
