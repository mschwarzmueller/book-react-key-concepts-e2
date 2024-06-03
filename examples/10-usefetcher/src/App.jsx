import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Posts from './pages/Posts.jsx';
import PostDetails, {
  action as deletePostAction,
} from './pages/PostDetails.jsx';
import Welcome from './pages/Welcome.jsx';
import Root from './pages/Root.jsx';
import Error from './components/Error.jsx';
import PostsLayout, { loader as postsLoader } from './pages/PostsLayout.jsx';
import NewPost, { action as newPostAction } from './pages/NewPost.jsx';
import { action as likeAction } from './pages/like.js';

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
