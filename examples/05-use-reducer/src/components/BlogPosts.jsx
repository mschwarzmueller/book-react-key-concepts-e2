import classes from './BlogPosts.module.css';

function BlogPosts({ posts }) {
  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

export default BlogPosts;
