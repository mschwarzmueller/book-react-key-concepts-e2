import { useSuspenseQuery } from '@tanstack/react-query';

async function fetchPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();
  return posts;
}

function BlogPosts() {
  const {data} = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  });

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
