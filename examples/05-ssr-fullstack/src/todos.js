export async function loadTodos() {
  const response = await fetch('/api/todos');
  const todos = await response.json();
  return todos;
}

export async function saveTodo(todoData) {
  const response = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(todoData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const savedTodo = await response.json();
  return savedTodo;
}
