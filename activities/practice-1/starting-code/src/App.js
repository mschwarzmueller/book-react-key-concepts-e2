import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component

  return (
    <>
      <NewPost />
      <BlogPosts />
    </>
  );
}

export default App;
