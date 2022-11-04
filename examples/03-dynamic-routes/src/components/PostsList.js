import { Link, useLoaderData } from 'react-router-dom';

function PostsList() {
  const loadedPosts = useLoaderData();

  return (
    <ul className="posts">
      {loadedPosts.map((post) => (
        <li key={post.id}>
          {post.title} (<Link to={`${post.id}`}>View Details</Link>)
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
