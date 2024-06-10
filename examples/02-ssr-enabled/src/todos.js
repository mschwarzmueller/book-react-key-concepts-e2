export function loadTodos() {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
}

export function saveTodo(todoData) {
  const newTodo = {
    id: new Date().toISOString(),
    ...todoData,
  };
  const todos = loadTodos();
  todos.push(newTodo);
  localStorage.setItem('todos', JSON.stringify(todos));
  return newTodo;
}
