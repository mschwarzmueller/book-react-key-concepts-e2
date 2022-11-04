import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const loadedPosts = useLoaderData();
  
  return (
    <ul className="posts">
      {loadedPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostsList;
