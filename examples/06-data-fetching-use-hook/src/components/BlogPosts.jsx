import { use } from 'react';

async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

function BlogPosts() {
  const posts = use(fetchPosts());

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
