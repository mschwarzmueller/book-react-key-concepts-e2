# 1. Which two main advantages can SSR offer?

Server-side rendering (SSR) can ensure that website users see some content on the page right from the start (i.e., after the initial page load).
Without SSR, an almost empty `index.html` file would be sent to the browser.

The same is true for search engine crawlers: they see the actual page content, which helps with search engine ranking.

# 2. What are potential disadvantages or weaknesses of SSR?

You must enable SSR, which is more complex than creating a "normal" Vite-based project.

In addition, when deploying the application, you need a host that supports running Node.js code on the server. A static host won't suffice anymore.

Without a more complex setup (or without using Next.js), you also can't easily perform aysnchronous operations (like data fetching) on the server.

# 3. What’s the purpose of React’s renderToString() function?

`renderToString()` is used (on the server-side) to render a React component tree to HTML. This HTML code can then be sent back to the client (i.e., to the browser).

`renderToString()` also produces code that can be used on the client to hydrate it (via `hydrateRoot()`). This ensures that website users interact with a SPA after the initial page load.

# 4. How does Next.js help with SSR?

Next.js comes with SSR support built in - hence it vastly simplifies the process of building SSR-enabled React apps.

# 5. How are routes configured in Next.js (when using the “App Router”)?

When using the "App Router", routes are defined by adding folders and files in the project's `app/` folder.

The folder names define the route path segments (e.g., `app/events` => `/events`). In addition, `page.js` files must be added into those folder to "activate" the routes.

# 6. What’s special about a page component in Next.js?

A page component is a regular React component stored in a `page.js` file. Hence, Next.js will render it whenever that page becomes active.

# 7. What’s the purpose of layout components in Next.js?

Layouts (defined via `layout.js` files) can be used to share JSX markup (and styles etc.) across multiple pages.

# 8. Where can you store non-page (and non-layout) React components in a Next.js project?

Anywhwere you want! Next.js does not enforce any specific project structure for regular components (i.e., for components that are not stored in files with reserved filenames like `page.js` etc.).

# 9. When and where do you need to add the "use client" directive?

`"use client"` must be added at the very top of any component file that uses a React Hook (like `useState()` or Next.js' `useRouter()`).

