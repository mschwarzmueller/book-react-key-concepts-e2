import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Todos, { loader as todosLoader } from './routes/Todos';
import NewTodo, { action as newTodoAction } from './routes/NewTodo';
import SelectedTodo, {
  action as changeTodoAction,
  loader as todoLoader,
} from './routes/SelectedTodo';
import Error from './routes/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Todos />,
    errorElement: <Error />,
    loader: todosLoader,
    children: [
      { path: 'new', element: <NewTodo />, action: newTodoAction },
      {
        path: ':id',
        element: <SelectedTodo />,
        action: changeTodoAction,
        loader: todoLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
