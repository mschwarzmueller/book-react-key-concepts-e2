import BlogPosts from './components/BlogPosts.jsx';
import NewPost from './components/NewPost.jsx';
import blogLogoImg from './assets/blog-logo.jpg';

function App() {
  // Todo: Fetch blog posts from https://jsonplaceholder.typicode.com/posts (see documentation on https://jsonplaceholder.typicode.com/guide/)
  // Pass fetched posts to <BlogPost /> via props & output the posts in that component

  return (
    <>
      <header>
        <img src={blogLogoImg} from="Pen & paper" />
        <h1>
          My <em>Effectful</em> Blog
        </h1>
      </header>
      <NewPost />
      <BlogPosts />
    </>
  );
}

export default App;
