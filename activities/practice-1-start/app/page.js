import Link from 'next/link';
import fs from 'node:fs/promises';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
  const posts = JSON.parse(storedPosts);

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
        <ul id="posts">
          {posts.map((post) => (
            <li key={post.id}>
              <div>
                <h2>{post.title}</h2>
                <p>
                  Posted on{' '}
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <p>
                <Link href={`/blog/${post.id}`}>Read more</Link>
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
