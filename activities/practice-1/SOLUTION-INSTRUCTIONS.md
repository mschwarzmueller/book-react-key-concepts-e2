1. Create a new React project via `npm create vite@latest <project>` as explained in _Chapter 1, React—What and Why?_. Then, install the React Router library by running `npm install react-router-dom` inside the project folder.

2. For the three required pages, create three components: a `Todos` component, a `NewTodo` component, and a `SelectedTodo` component. Store these components in files inside the `src/routes` folder since these components will only be used for routing.

3. For the `Todos` component, enter the following code:

   ```jsx
   // src/routes/Todos.jsx

   function Todos() {
     const todos = [];

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
           <ul id="todos"></ul>
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
   ```

   The code for the `NewTodo` component should look like this:

   ```jsx
   // src/routes/NewTodo.jsx

   import Modal from '../components/Modal.jsx';

   function NewTodo() {
     return (
       <Modal>
         <Form method="post">
           <p>
             <label htmlFor="text">Your todo</label>
             <input type="text" id="text" name="text" />
           </p>
           <p className="form-actions">
             <button>Save Todo</button>
           </p>
         </Form>
       </Modal>
     );
   }

   export default NewTodo;
   ```

   The code for the `SelectedTodo` component will look as follows:

   ```jsx
   // src/routes/SelectedTodo.jsx
   import Modal from '../components/Modal.jsx';

   function SelectedTodo() {
     return (
       <Modal>
         <Form method="post">
           <p>
             <label htmlFor="text">Your todo</label>
             <input type="text" id="text" name="text" />
           </p>
           <p className="form-actions">
             <button>Update Todo</button>
           </p>
         </Form>
         <Form method="post">
           <input type="hidden" name="_method" value="DELETE" />
           <p className="form-actions">
             <button className="btn-alt">Delete Todo</button>
           </p>
         </Form>
       </Modal>
     );
   }

   export default SelectedTodo;
   ```

4. At the moment, the route definitions are missing, and no data loading or submission logic has been added.

   Please note, however, that the components already use `<Link>` and `<Form>`.

5. With the components added, it's time to add route definitions. For this, you must first enable React Router by importing and using the `RouterProvider` component (in the `App` component):

   ```jsx
   import { RouterProvider } from 'react-router-dom';

   function App() {
     return <RouterProvider />;
   }

   export default App;
   ```

   `RouterProvider` requires a value for its `router` prop. That value must be an array of route definition objects:

   ```jsx
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';

   import Todos from './routes/Todos.jsx';
   import NewTodo from './routes/NewTodo.jsx';
   import SelectedTodo from './routes/SelectedTodo.jsx';

   const router = createBrowserRouter([
     {
       path: '/',
       element: <Todos />,
       children: [
         { path: 'new', element: <NewTodo /> },
         { path: ':id', element: <SelectedTodo /> },
       ],
     },
   ]);

   function App() {
     return <RouterProvider router={router} />;
   }

   export default App;
   ```

6. Please note that the `/new` and `/:id` routes are child routes of the `/` route. The `/` route is thus a layout route, wrapping these child routes. That's why this layout route (`Todos` in `Todos.jsx`) renders an `<Outlet />` element.
7. To load and display to-dos, add a `loader()` function to the `Todos` route. As a first step, export such a function in the `routes/Todos.jsx` file:

   ```js
   // other imports ...
   import { getTodos } from '../data/todos.js';

   export function loader() {
     // getTodos() is a utility function that uses localStorage under the hood
     return getTodos();
   }
   ```

8. Thereafter, assign it as a value for the `loader` prop on the `/` route definition:

   ```js
   import Todos, { loader as todosLoader } from './routes/Todos.jsx';
   // other imports ...

   const router = createBrowserRouter([
     {
       path: '/',
       element: <Todos />,
       loader: todosLoader,
       children: [
         // child routes ...
       ],
     },
   ]);
   ```

9. `getTodos()` from the previous step is a utility function that reaches out to `localStorage` to retrieve and parse stored to-dos. Implement this function using the following code:

   ```js
   function getTodosFromStorage() {
     return JSON.parse(localStorage.getItem('todos'));
   }

   export function getTodos() {
     return getTodosFromStorage();
   }
   ```

10. To use the loaded to-dos data, use the `useLoaderData()` Hook inside the `Todos` component. The loaded to-dos are then output via an unordered list (`<ul>`):

    ```jsx
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
    ```

11. Another route that needs to-do data is the `/:id` route. There, a single to-do item must be loaded as the route is activated. You could reuse the to-dos data from the `/` route (via `useRouteLoaderData()`) but for practice purposes, use a separate `loader()` function for this activity.

    This `loader()` function, which is added to and exported from `routes/SelectedTodo.jsx` has this shape:

    ```js
    import { getTodo } from '../data/todos.js';
    // ... other imports

    export async function loader({ params }) {
      return getTodo(params.id);
    }
    ```

12. `getTodo()` is yet another utility function. Implement it as follows:

    ```js
    export function getTodo(id) {
      const todos = getTodosFromStorage();
      const todo = todos.find((t) => t.id === id);

      if (!todo) {
        throw new Error('Could not find todo for id ' + id);
      }

      return todo;
    }
    ```

13. Please note that this function throws an error if no to-do is found for the specified id. For that reason, error handling will be implemented in a later step.

14. Inside the `SelectedTodo` component, access the selected to-do item data via `useLoaderData()`. Then, use that data to set a default value on the form input:

    ```jsx
    function SelectedTodo() {
      const todo = useLoaderData();
      return (
        <Modal>
          <Form method="post">
            <p>
              <label htmlFor="text">Your todo</label>
              <input
                type="text"
                id="text"
                name="text"
                defaultValue={todo.text}
              />
            </p>
            <p className="form-actions">
              <button>Update Todo</button>
            </p>
          </Form>
          <Form method="post">
            <input type="hidden" name="_method" value="DELETE" />
            <p className="form-actions">
              <button className="btn-alt">Delete Todo</button>
            </p>
          </Form>
        </Modal>
      );
    }
    ```

15. To ensure users are able to submit new to-dos, export an `action()` function in the `NewTodo` component file, as shown here:

    ```js
    import { addTodo } from '../data/todos.js';
    // ... other imports

    export async function action({ request }) {
      const formData = await request.formData();
      const enteredText = formData.get('text');
      addTodo(enteredText);
      return redirect('/');
    }
    ```

16. This function extracts the submitted form data, retrieves the entered text value, calls the `addTodo()` utility function, and then redirects the user back to the main page (`/`).

    Since the `NewTodo` component uses `<Form>` instead of `<form>`, React Router will automatically prevent the browser default and call the `action()` function assigned to the route that contains the form (`/new` route, in this case).

17. `addTodo()` (defined in `data/todos.js`) is implemented like this:

    ```js
    function saveTodosToStorage(todos) {
      const serializedTodos = JSON.stringify(todos);
      localStorage.setItem('todos', serializedTodos);
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
    ```

18. To allow React Router to execute the preceding `action()` function when the `<Form>` in `NewTodo` is submitted, register the action in the route definition:

    ```jsx
    import NewTodo, { action as newTodoAction } from './routes/NewTodo.jsx';
    // ... other imports

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Todos />,
        loader: todosLoader,
        children: [
          {
            path: 'new',
            element: <NewTodo />,
            action: newTodoAction,
          },
        ],
      },
    ]);
    ```

19. To allow users to update or delete to-do items, add an `action()` function to the `SelectedTodo` component file. In that function, use the value of the hidden `_method` input field to determine which code to run.

    This is required because inside the `SelectedTodo` component, two forms are created via `<Form>` (see step 3): one `<Form>` aims to update to-dos, and the other `<Form>` is used to delete to-dos.

    The `action()` function is implemented like this:

    ```js
    import { deleteTodo, getTodo, updateTodo } from '../data/todos.js';

    // ... other imports

    export async function action({ request, params }) {
      const todoId = params.id;
      const formData = await request.formData();
      const method = formData.get('_method');

      if (method !== 'DELETE') {
        const enteredText = formData.get('text');
        updateTodo(todoId, enteredText);
      }

      if (method === 'DELETE') {
        deleteTodo(todoId);
      }
      return redirect('/');
    }
    ```

20. Once again, define `updateTodo()` and `deleteTodo()` in the `data/todos.js` file:

    ```js
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
    ```

21. Finally, to make React Router aware of this `action()` function and ensure that it gets executed as the respective forms are submitted, register the action created in step 16, as follows:

    ```jsx
    import SelectedTodo, {
      action as changeTodoAction,
      loader as todoLoader,
    } from './routes/SelectedTodo';
    // ... other imports

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Todos />,
        loader: todosLoader,
        children: [
          {
            path: 'new',
            element: <NewTodo />,
            action: newTodoAction,
          },
          {
            path: ':id',
            element: <SelectedTodo />,
            action: changeTodoAction,
            loader: todoLoader,
          },
        ],
      },
    ]);
    ```

22. To handle any errors that have occurred, add a new `Error` component that is displayed when things go wrong. This component is stored in `routes/Error.jsx`:

    ```jsx
    import { useRouteError } from 'react-router-dom';

    import Modal from '../components/Modal.jsx';

    function Error() {
      const error = useRouteError();

      return (
        <Modal>
          <h1>An error occurred!</h1>
          <p>{error.message}</p>
        </Modal>
      );
    }

    export default Error;
    ```

    This component uses React Router's `useRouteError()` Hook to access the error that was thrown. The error is then used to output the error message.

23. To use this `Error` component as a fallback, add it as a value for the `errorElement` property in your route definitions:

```jsx
import Error from './routes/Error.jsx';
// ... other imports

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />,
    errorElement: <Error />,
    loader: todosLoader,
    children: [
      {
        path: 'new',
        element: <NewTodo />,
        action: newTodoAction,
      },
      {
        path: ':id',
        element: <SelectedTodo />,
        action: changeTodoAction,
        loader: todoLoader,
      },
    ],
  },
]);
```

Here, `Error` is set as an `errorElement` on the main route and is used by React Router for all errors occurring anywhere in the entire app.
