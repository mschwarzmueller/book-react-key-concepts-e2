import classes from './BlogPosts.module.css';

function BlogPosts({ posts }) {
  return (
    <ul className={classes.posts}>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
