let todos = [];

export async function saveTodo(todo) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  const newTodo = { ...todo, id: new Date().getTime() };
  todos = [...todos, newTodo];
  return newTodo;
}

export function getTodos() {
  return todos;
}
