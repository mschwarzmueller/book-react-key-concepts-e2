import { useCallback, useEffect, useState } from 'react';

import BlogPosts from './components/BlogPosts';

function App() {
  const [fetchedPosts, setFetchedPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // Using useCallback() to prevent an infinite loop in useEffect() below
  const fetchPosts = useCallback(async function fetchPosts() {
    setIsLoading(fetchedPosts ? false : true); // don't set to "Loading" if data was fetched before
    setError(null);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch posts.');
      }

      const posts = await response.json();

      setIsLoading(false);
      setError(null);
      setFetchedPosts(posts);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      setFetchedPosts(null);
    }
  }, []);

  useEffect(
    function () {
      fetchPosts();
    },
    [fetchPosts]
  );

  return (
    <>
      <header>
        <h1>Complex State Blog</h1>
        <button onClick={fetchPosts}>Load Posts</button>
      </header>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {fetchedPosts && <BlogPosts posts={fetchedPosts} />}
    </>
  );
}

export default App;
