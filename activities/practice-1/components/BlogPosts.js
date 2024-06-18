import fs from 'node:fs/promises';

import Link from 'next/link';

export default async function BlogPosts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
  const posts = JSON.parse(storedPosts);
  return (
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
  );
}
