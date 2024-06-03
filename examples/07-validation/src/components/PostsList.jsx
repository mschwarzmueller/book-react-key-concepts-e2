import { Link, useLoaderData } from 'react-router-dom';

function PostsList() {
  const loadedPosts = useLoaderData();

  return (
    <>
      <Link id="new-post-btn" to="/posts/new">New Post</Link>
      <ul className="posts">
        {loadedPosts.map((post) => (
          <li key={post.id}>
            <Link to={`${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PostsList;
