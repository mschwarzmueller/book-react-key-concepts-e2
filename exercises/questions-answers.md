# 1. What is the defining characteristic of React Server Components?

React Server Components are never executed on the client-side.

# 2. What are the problems that React Server Components solve?

React Server Components allow you to intertwine frontend and backend code, enable asynchronous server-side data fetching, reduce the size of client-side JavaScript bundles, and facilitate the use of compute-heavy operations or large third-party libraries.

# 3. How are React Server Components created and used in Next.js projects?

In Next.js projects using the "App Router," all React components are React Server Components by default. They are created and used like regular React components.

# 4. Why can't React Server Components and Server Actions be used in all React projects?

React Server Components and Server Actions require a special project setup, including a build process that separates server and client components and sets up API endpoints to trigger their execution on the server.

# 5. What is the key difference between Server-Side Rendering (SSR) and React Server Components (RSCs)?

SSR is about rendering an initial page snapshot on the server, while RSCs can be rendered on the server even after the initial page load and their code never ends up on the client-side.

# 6. What is the purpose of the 'use client' directive?

The `'use client'` directive is used to mark components as client components, allowing them to use Hooks, manage state, and handle user input.

# 7. How does the 'use client' directive affect child components?

All nested components of a client component also become client components, even if they don't have the `'use client'` directive.

# 8. What are the rules for combining server components and client components?

Server components can import and render client components, but client components cannot directly import and render server components. Client components can implicitly render server components via props.

# 9. How can you handle loading states in Next.js while fetching data with RSCs?

Next.js allows you to define `loading.js` files to create components that are rendered while data is being fetched by sibling or nested components.

# 10. What are Server Actions in React, and how do they differ from client actions?

Server Actions are functions that execute on the server-side and are used to handle data mutations. They differ from client actions in that they must be asynchronous and include the `'use server'` directive.

# 11. How can you trigger a Server Action?

Server Actions are triggered by React. You achieve this by setting the `action` prop on a `<form>` element to a Server Action.

# 12. How can you update the UI after a Server Action?

You can update the UI after a Server Action by redirecting the user to a different page using the `redirect()` function (in Next.js) or by using the `useActionState()` Hook to update the UI that contains the form.

# 13. Can you define Server Actions in separate files?

Yes, Server Actions can be defined in separate files, and the `'use server'` directive can be placed at the top of the file to apply to multiple Server Actions within that file.
