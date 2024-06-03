import { Link, Outlet, useLoaderData } from 'react-router-dom';

import { getTodos } from '../data/todos.js';

function Todos() {
  const todos = useLoaderData();

  let content = (
    <main>
      <h1>No todos found</h1>
      <p>Start adding some!</p>
      <p>
        <Link className="btn-cta" to="/new">
          Add Todo
        </Link>
      </p>
    </main>
  );

  if (todos && todos.length > 0) {
    content = (
      <main>
        <section>
          <Link className="btn-cta" to="/new">
            Add Todo
          </Link>
        </section>
        <ul id="todos">
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link to={todo.id}>{todo.text}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }

  return (
    <>
      {content}
      <Outlet />
    </>
  );
}

export default Todos;

export function loader() {
  return getTodos();
}
