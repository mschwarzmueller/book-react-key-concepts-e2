import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts from './pages/Posts';
import PostDetails, { action as deletePostAction } from './pages/PostDetails';
import Welcome from './pages/Welcome';
import Root from './pages/Root';
import PostsLayout, { loader as postsLoader } from './pages/PostsLayout';
import Error from './components/Error';
import NewPost, { action as newPostAction } from './pages/NewPost';
import { action as likeAction } from './pages/like';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Welcome /> },
      {
        path: '/posts',
        id: 'posts',
        element: <PostsLayout />,
        loader: postsLoader,
        children: [
          { index: true, element: <Posts /> },
          { path: ':id', element: <PostDetails />, action: deletePostAction },
          { path: 'new', element: <NewPost />, action: newPostAction },
          { path: ':id/like', action: likeAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
