import { useState, useEffect } from 'react';

function Posts() {
  const [loadedPosts, setLoadedPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);

      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );

        if (!response.ok) {
          throw new Error('Fetching posts failed.');
        }

        const resData = await response.json();
        setLoadedPosts(resData);
      } catch (error) {
        setError(error.message);
      }

      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  let content = <p>No posts found.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (loadedPosts) {
    content = (
      <ul className="posts">
        {loadedPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return (
    <main>
      <h1>Your Posts</h1>
      {content}
    </main>
  );
}

export default Posts;
