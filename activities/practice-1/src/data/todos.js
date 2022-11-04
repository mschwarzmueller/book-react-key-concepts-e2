function getTodosFromStorage() {
  return JSON.parse(localStorage.getItem('todos'));
}

function saveTodosToStorage(todos) {
  const serializedTodos = JSON.stringify(todos);
  localStorage.setItem('todos', serializedTodos);
}

export function getTodos() {
  return getTodosFromStorage();
}

export function getTodo(id) {
  const todos = getTodosFromStorage();
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    throw new Error('Could not find todo for id ' + id);
  }

  return todo;
}

export function addTodo(text) {
  let todos = getTodosFromStorage();
  const newTodo = {
    id: new Date().toISOString(),
    text,
  };
  if (todos) {
    todos.unshift(newTodo);
  } else {
    todos = [newTodo];
  }
  saveTodosToStorage(todos);
}

export function updateTodo(id, newText) {
  const todos = getTodos();
  const updatedTodo = todos.find((t) => t.id === id);
  updatedTodo.text = newText;
  saveTodosToStorage(todos);
}

export function deleteTodo(id) {
  const todos = getTodos();
  const updatedTodos = todos.filter((t) => t.id !== id);
  saveTodosToStorage(updatedTodos);
}
