# 1. How is routing different from loading content conditionally?

Routing **is** about loading content conditionally. But you don't load content conditionally because some state changed, instead you do it because the URL path changed.

Instead of listening to such path changes manually, you typically use a routing library like the React Router library. This package then detects URL path changes and loads the appropriate content (based on your route definitions).

# 2. How are routes defined?

You define routes by creating a router (via `createBrowserRouter()` and `<RouterProvider>`) and passing an array of route definitions to `createBrowserRouter()`.

Each route definition typically includes a `path` (e.g., `/orders`) and an `element` (e.g., `<Orders />`) that should be rendered for that path.

# 3. How should you add links to different routes to your pages?

Internal links (i.e., links leading to one of your routes) should be created via React Router's `Link` or `NavLink` components.

Links to external websites or resources (i.e., anything but your own routes) should be created via the `<a>` element.

You can also navigate programmatically with help of the `navigate()` function returned by `useNavigate()`.

# 4. How can dynamic routes (e.g., details for one of many products) be added to your app?

Dynamic routes are a very important feature! 

You can easily add them by adding a dynamic path segment to your route definitions' `path` props. For example, you could add `:id` to a specific `path` to activate that route for different `id` values.

# 5. How can dynamic route parameter values be extracted (e.g., to load product data)?

Dynamic path parameter values can be extracted from the URL via the `useParams()` Hook provided by React Router.
You can use this Hook in the component that was loaded for the activated route. It yields an object that contains the dynamic segments as properties. The values of the properties are the actual values encoded in the URL path.

# 6. What’s the purpose of nested routes?

Nested routes make sharing UI elements across routes easier. If multiple routes should share a common component (e.g., some specific layout), you can use nested routes.
