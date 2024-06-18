'use server';

import { redirect } from 'next/navigation';
import fs from 'node:fs/promises';

export async function storePost(prevState, formData) {
  const title = formData.get('title');
  const body = formData.get('body');

  let errors = [];

  if (!title || title.trim() === '') {
    errors.push('Title is required');
  }

  if (!body || body.trim() === '') {
    errors.push('Content is required');
  }

  if (errors.length > 0) {
    return { errors };
  }

  const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
  const posts = JSON.parse(storedPosts);
  const postId = new Date().getTime();
  const newPost = {
    id: postId,
    createdAt: new Date().toISOString(),
    title,
    body,
  };

  posts.push(newPost);
  await fs.writeFile('data/posts.json', JSON.stringify(posts));
  redirect('/blog/' + postId);
}
