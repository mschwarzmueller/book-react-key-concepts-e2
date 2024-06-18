import Link from 'next/link';
import { Suspense } from 'react';

import BlogPosts from '../components/BlogPosts';

export default function Home() {
  return (
    <>
      <header>
        <h1>NextPost</h1>
        <p>
          Welcome to NextPost! Here, you can read all the latest blog posts from
          users all over the world.
        </p>
        <p>Unmoderated posts from anonymous users. What could go wrong?</p>
        <p>
          <Link href="/blog/new">Share your own post</Link>
        </p>
      </header>
      <main>
        <Suspense fallback={<p>Fetching blog posts...</p>}>
          <BlogPosts />
        </Suspense>
      </main>
    </>
  );
}
