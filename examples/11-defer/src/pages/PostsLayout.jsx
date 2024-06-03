import React from 'react';
import { Outlet, useLoaderData, defer, Await } from 'react-router-dom';

import PostsList from '../components/PostsList.jsx';
import { wait } from '../util/time-util.js';

function PostsLayout() {
  const data = useLoaderData();

  return (
    <div id="posts-layout">
      <nav>
        <React.Suspense fallback={<p>Loading posts...</p>}>
          <Await resolve={data.posts}>
            {(loadedPosts) => <PostsList posts={loadedPosts} />}
          </Await>
        </React.Suspense>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PostsLayout;

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  await wait(3); // utility function, simulating a slow response
  if (!response.ok) {
    throw new Error('Could not fetch posts');
  }
  const data = await response.json();
  return data;
}

export async function loader() {
  return defer({
    posts: getPosts(),
  });
}
