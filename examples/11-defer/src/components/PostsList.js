import { Link } from 'react-router-dom';

function PostsList({ posts }) {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          {post.title} (<Link to={`${post.id}`}>View Details</Link>)
        </li>
      ))}
    </ul>
  );
}

export default PostsList;
