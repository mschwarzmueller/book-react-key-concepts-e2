import { Link } from 'react-router-dom';

function PostsList({ posts }) {
  return (
    <>
      <Link id="new-post-btn" to="/posts/new">
        New Post
      </Link>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsList;
