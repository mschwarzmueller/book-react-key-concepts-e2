import { useState } from 'react';

import classes from './BlogPosts.module.css';

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const blogPosts = await response.json();
  return blogPosts;
}

function BlogPosts() {
  const [loadedPosts, setLoadedPosts] = useState([]);

  function fetchPostsHandler() {
    fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }

  // fetchPosts().then((fetchedPosts) => setLoadedPosts(fetchedPosts)); // causes an infinite loop!


  return (
    <>
      <button onClick={fetchPostsHandler}>Fetch Posts</button>
      <ul className={classes.posts}>
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BlogPosts;
