import BlogPosts from './components/BlogPosts.jsx';
import useFetch from './hooks/use-fetch.js';

function App() {
  const [{ data, isLoading, error }, fetchPosts] = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <>
      <header>
        <h1>Complex State Blog</h1>
        <button onClick={fetchPosts}>Load Posts</button>
      </header>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <BlogPosts posts={data} />}
    </>
  );
}

export default App;
