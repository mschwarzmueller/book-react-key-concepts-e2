import { useEffect, useState } from 'react';

function BlogPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchBlogPosts() {
      // simulate slow network
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = await response.json();
      setPosts(posts);
    }

    fetchBlogPosts();
  });
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
