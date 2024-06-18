import fs from 'node:fs/promises';

import Link from 'next/link';

async function fetchPost(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
  const posts = JSON.parse(storedPosts);
  const post = posts.find((post) => post.id === Number(id));
  return post;
}

export default async function PostDetailPage({ params }) {
  const { postId } = params;
  const post = await fetchPost(postId);

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article id="post">
      <header>
        <h1>{post.title}</h1>
        <p>Posted on {formattedDate}</p>
      </header>
      <p>{post.body}</p>
      <p>
        Go <Link href="/">back</Link> to starting page.
      </p>
    </article>
  );
}
