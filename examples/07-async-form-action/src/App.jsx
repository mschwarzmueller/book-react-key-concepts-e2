function App() {
  async function storeTodoAction(formData) {
    const todoTitle = formData.get('title');
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({ title: todoTitle }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const todo = await response.json();
    console.log(todo);
  }

  return (
    <>
      <form action={storeTodoAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
    </>
  );
}

export default App;
