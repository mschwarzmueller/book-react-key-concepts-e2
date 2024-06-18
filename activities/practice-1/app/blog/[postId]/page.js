import fs from 'node:fs/promises';
import { Suspense } from 'react';

import PostDetails from '../../../components/PostDetails';
import BlogPosts from '@/components/BlogPosts';

async function fetchPost(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
  const posts = JSON.parse(storedPosts);
  const post = posts.find((post) => post.id === Number(id));
  return post;
}

export default function PostDetailPage({ params }) {
  const { postId } = params;
  const fetchPostPromise = fetchPost(postId);

  return (
    <>
      <Suspense fallback={<p>Fetching post details...</p>}>
        <PostDetails promise={fetchPostPromise} />
      </Suspense>
      <h2>Explore more posts</h2>
      <Suspense fallback={<p>Fetching posts...</p>}>
        <BlogPosts />
      </Suspense>
    </>
  );
}
