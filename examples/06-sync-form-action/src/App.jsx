function App() {
  function storeTaskAction(formData) {
    const task = {
      title: formData.get('title'),
      body: formData.get('body'),
      dueDate: formData.get('date'),
    };
    localStorage.setItem('daily-task', JSON.stringify(task));
  }

  return (
    <>
      <form action={storeTaskAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p>
          <label htmlFor="date">Due Date</label>
          <input type="date" id="date" name="date" />
        </p>
        <p>
          <label htmlFor="body">Body</label>
          <textarea id="body" name="body" rows={3} />
        </p>
        <p className="actions">
          <button>Store Task</button>
        </p>
      </form>
    </>
  );
}

export default App;
