1. In the provided starting project, create the three `page.js` files for the `/`, `/blog/new` and `/blog/<some-id>` routes: `app/page.js`, `app/blog/new/page.js`, `app/blog/[postId]/page.js`.

2. Add an `actions/` folder to the root project folder and store a new `blog-posts.js` file in it. Also create a new `data/` folder and add a `posts.json` file in it. Inside the `posts.json` file, store an empty array (`[]`).

3. In the `app/blog/new/page.js` file, create and export a new `NewPostPage` component and return a `<form>` in it.

   The `<form>` should contain an `<input>` for the blog post title and a `<textarea>` for the body. Make sure to add appropriate `name` prop values to both inputs. Also add a submit `<button>`.

   For the moment, the `app/blog/new/page.js` file should contain the following content:

   ```jsx
   export default function NewPostPage() {
     return (
       <>
         <h1>Share a new post with the world</h1>
         <form>
           <p>
             <label htmlFor="title">Title</label>
             <input id="title" name="title" type="text" />
           </p>
           <p>
             <label htmlFor="body">Content</label>
             <textarea id="body" name="body" rows={5}></textarea>
           </p>
           <p className="actions">
             <button>Save Post</button>
           </p>
         </form>
       </>
     );
   }
   ```

4. Add and export a `storePost()` Server Action function inside the `actions/blog-post.js` file. Also add `'use server'` at the top of this file.

   The Server Action should accept two arguments (since it will soon be used in conjunction with `useActionState()`): a previous state and a form data object.

5. Extract and validate the `title` and `body` values from the form data. Collect errors in an `errors` array and return an object with the error data if at least one validation error occurred.

   After validation, create a blog post with the submitted `title` and `body`, and add an ID via `new Date().getTime().` Also store a `createdAt` date value for the blog post via `new Date().getISOString()`.

   Read the `data/posts.json` file with the help of Node’s `fs` package and update it with the newly created blog post object.

   Finally, save the updated posts array back to the `data/posts.json` file and redirect the user to the details page for the created post.

   The finished `actions/blog-post.js` file looks like this:

   ```jsx
   'use server';

   import fs from 'node:fs/promises';

   import { redirect } from 'next/navigation';

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
   ```

6. Back in the `app/blog/new/page.js` file, import the newly added `storePost()` Server Action.

   Use it in the `NewPostPage` component and pass it to the `useActionState()` Hook. Also pass an initial state with `errors` set to `null` to that Hook.

   Bind the action returned by `useActionState()` to the `action` prop of the `<form>` and use the returned state to conditionally output the error messages.

   The finished `NewPostPage` component looks like this:

   ```jsx
   'use client';

   import { storePost } from '../../../actions/blog-posts';
   import { useActionState } from 'react';

   export default function NewPostPage() {
     const [formState, formAction] = useActionState(storePost, {
       errors: null,
     });

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
   ```

7. In the `app/page.js` file, convert the `Home` component to an `async` component (so that you can use `async / await`) and read the stored posts from `data/posts.json` (via Node’s `fs` package).

   Output the fetched posts along with some static title and info text. Also add a link that leads to the `/blog/new` page.

   The component should look like this:

   ```jsx
   import Link from 'next/link';
   import fs from 'node:fs/promises';

   export default async function Home() {
     const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
     const posts = JSON.parse(storedPosts);

     return (
       <>
         <header>
           <h1>NextPost</h1>
           <p>
             Welcome to NextPost! Here, you can read all the latest blog posts
             from users all over the world.
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
   ```

8. Edit the `app/blog/[postId]/page.js` file and add a new `async` `PostDetailPage` component.

   Extract the post ID from the URL by using the `params` prop that’s automatically passed to the page by Next.js.

   Use the `postId` property together with Node’s `fs` package to find the appropriate post in the `data/posts.json` file.

   Output the fetched post data—the final file should look like this:

    ```jsx
    import fs from 'node:fs/promises';

    import Link from 'next/link';

    export default async function PostDetailPage({ params }) {
      const { postId } = await params;
      const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
      const posts = JSON.parse(storedPosts);
      const post = posts.find((post) => post.id === Number(postId));

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
    ```
