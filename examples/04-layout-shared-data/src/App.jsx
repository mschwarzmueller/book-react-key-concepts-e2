import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts from './pages/Posts.jsx';
import PostDetails from './pages/PostDetails.jsx';
import Welcome from './pages/Welcome.jsx';
import Root from './pages/Root.jsx';
import PostsLayout, { loader as postsLoader } from './pages/PostsLayout.jsx';

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
