'use client';

import { storePost } from '@/actions/blog-posts';
import { useActionState } from 'react';

export default function NewPostPage() {
  const [formState, formAction] = useActionState(storePost, { errors: null });

  return (
    <>
      <h1>Share a new post with the world</h1>
      <form action={formAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" />
        </p>

        <p>
          <label htmlFor="body">Content</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button>Save Post</button>
        </p>
      </form>
    </>
  );
}
