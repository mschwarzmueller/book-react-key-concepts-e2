import { useState, useEffect } from 'react';

import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  const [loadedPosts, setLoadedPosts] = useState([]);
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component
  useEffect(function () {
    async function loadPosts() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      const blogPosts = await response.json();
      setLoadedPosts(blogPosts);
    }

    loadPosts();
  }, []);

  return (
    <>
      <NewPost />
      <BlogPosts posts={loadedPosts} />
    </>
  );
}

export default App;
