import { Outlet, useLoaderData } from 'react-router-dom';

import PostsList from '../components/PostsList';

function PostsLayout() {
  const loadedPosts = useLoaderData();

  return (
    <div id="posts-layout">
      <nav>
        <PostsList posts={loadedPosts} />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PostsLayout;

export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Could not fetch posts');
  }
  return response;
}
