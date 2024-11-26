1.  In the provided starting project, create two new component files in a `components/` folder: `components/BlogPosts.js` and `components/PostDetails.js`.

2.  In `components/BlogPosts.js`, create and export a new `BlogPosts` component function.
    Move the `<ul id="posts">` element from the `Home` component in the `app/page.js` file with all its child elements into the `BlogPosts` component and return it there.

        Also move the data fetching code from `app/page.js` into the newly created `components/BlogPosts.js` file.

        The finished `BlogPosts` component in `components/BlogPosts.js` should look like this:

        ```jsx
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
        ```

3.  Import and use the `BlogPosts` component in the `app/page.js` file. Wrap it with React’s `Suspense` component and display any fallback content of your choice.

    The updated `app/page.js` file should contain this code:

    ```jsx
    import Link from 'next/link';
    import { Suspense } from 'react';

    import BlogPosts from '../components/BlogPosts';

    export default function Home() {
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
            <Suspense fallback={<p>Fetching blog posts...</p>}>
              <BlogPosts />
            </Suspense>
          </main>
        </>
      );
    }
    ```

4.  Move the returned JSX code from the `app/blog/[postId]/page.js` file into the newly created `PostDetails` component.

    In that component, accept a prop (e.g., named `promise`) and read its value (a post) via React’s `use()` Hook.

    In addition, add `'use client'` at the top of the `components/PostDetails.js` file even though it’s technically not required here—simply to prove that the `use()` Hook can be used to fetch data in client components.

    The finished `PostDetails` component looks like this:

    ```jsx
    'use client';

    import Link from 'next/link';
    import { use } from 'react';

    export default function PostDetails({ promise }) {
      const post = use(promise);

      const formattedDate = new Date(post.createdAt).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }
      );

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

5.  Use the `PostDetails` component in the `app/blog/[postId]/page.js` file and wrap it with `Suspense`. Also import and output the `BlogPosts` component there—separately wrapped by `Suspense`.

    You may also render some extra JSX code (e.g., a `<h2>` heading) to highlight that this content will be displayed before any data fetching is done.

    Call `fetchPost()` and store its result in a constant or variable. Don’t `await` it! Pass the stored value (which will be a promise) as a value via the `promise` prop to the `PostDetails` component.

    The updated `app/blog/[postId]/page.js` file contains this code:

    ```jsx
    import fs from 'node:fs/promises';
    import { Suspense } from 'react';

    import PostDetails from '../../../components/PostDetails';
    import BlogPosts from '@/components/BlogPosts';

    async function fetchPost(id) {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const storedPosts = await fs.readFile('data/posts.json', 'utf-8');
      const posts = JSON.parse(storedPosts);
      const post = posts.find((post) => post.id === Number(id));
      return post;
    }

    export default async function PostDetailPage({ params }) {
      const { postId } = await params;
      const fetchPostPromise = fetchPost(postId);

      return (
        <>
          <Suspense fallback={<p>Fetching post details...</p>}>
            <PostDetails promise={fetchPostPromise} />
          </Suspense>
          <h2>Explore more posts</h2>
          <Suspense fallback={<p>Fetching posts...</p>}>
            <BlogPosts />
          </Suspense>
        </>
      );
    }
    ```
