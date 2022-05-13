import { useState, useEffect } from 'react';

import classes from './BlogPosts.module.css';

const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts(url) {
  const response = await fetch(url);
  const blogPosts = await response.json();
  return blogPosts;
}

function BlogPosts() {
  const [postsUrl, setPostsUrl] = useState(DEFAULT_URL);

  const [loadedPosts, setLoadedPosts] = useState([]);

  function adjustUrlHandler(event) {
    setPostsUrl(event.target.value);
  }

  useEffect(function () {
    fetchPosts(postsUrl).then((fetchedPosts) => setLoadedPosts(fetchedPosts));
  }, [postsUrl, fetchedPosts]);

  return (
    <>
      <input className={classes.input} type="text" onBlur={adjustUrlHandler} />
      <ul className={classes.posts}>
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default BlogPosts;
