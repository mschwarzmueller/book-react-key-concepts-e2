export async function saveTodo(todo) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a slow network or server
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const savedTodo = await response.json();
  console.log(savedTodo);
}
