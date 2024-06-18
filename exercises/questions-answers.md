# 1. What’s the purpose of React’s Suspense component?

The `Suspense` component can be used to display fallback content whilst some resource (code or data) is being fetched.

# 2. How do components need to fetch data in order to work with Suspense?

In order to work with data fetching, components must use "Suspense-enabled data sources" and fetch data during their rendering process.
Therefore, you typically rely on third-party frameworks or libraries.

# 3. How may Suspense be used when working with Next.js?

When working with Next.js, you can either use `Suspense` in combination with the `use()` Hook or wrap it around RSCs that fetch data (via `async / await`).

# 4. What’s the purpose of the use() Hook?

The `use()` Hook can be used for accessing context values or reading values of Suspense-compatible promises. Such promises are typically created by third-party libraries or frameworks.

The `use()` Hook can be used in server and client components. It can therefore help with fetching data in client components (during the rendering process).

# 5. Which kind of promises can be read by the use() Hook?

The `use()` Hook requires Suspense-compatible promises. Such promises are typically created by third-party libraries or frameworks.

# 6. List three ways of using Suspense with multiple components.

- Use a single `Suspense` component to wrap multiple components: fetch in parallel and show fallback content until all wrapped components are done fetching data.
- Use multiple `Suspense` components to wrap multiple components: fetch in parallel but show final content as soon as possible.
- Create a loading sequence by nesting `Suspense` components: show shared fallback content until outer component is done fetching data.
