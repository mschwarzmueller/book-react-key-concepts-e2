'use client'

import Link from 'next/link';
import { use } from 'react';

export default function PostDetails({ promise }) {
  const post = use(promise);

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
