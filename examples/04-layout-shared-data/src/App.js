import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import Welcome from './pages/Welcome';
import Root from './pages/Root';
import PostsLayout, { loader as postsLoader } from './pages/PostsLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: '/posts',
        id: 'posts',
        element: <PostsLayout />,
        loader: postsLoader,
        children: [
          { index: true, element: <Posts /> },
          { path: ':id', element: <PostDetails /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
