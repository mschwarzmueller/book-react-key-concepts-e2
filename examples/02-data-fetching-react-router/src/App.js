import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Posts, { loader as postsLoader } from './pages/Posts';
import Welcome from './pages/Welcome';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/posts" element={<Posts />} loader={postsLoader} />
    </>
  )
);

// Alternative approach:
// const router = createBrowserRouter([
//   { path: '/', element: <Welcome /> },
//   { path: '/posts', element: <Posts />, loader: postsLoader },
// ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
