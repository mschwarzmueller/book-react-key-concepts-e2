import { Suspense } from 'react';

import BlogPosts from './components/BlogPosts.jsx';

function App() {
  return (
    <>
      <h1>All posts</h1>
      <Suspense fallback={<p>Fetching blog posts...</p>}>
        <BlogPosts />
      </Suspense>
    </>
  );
}

export default App;
