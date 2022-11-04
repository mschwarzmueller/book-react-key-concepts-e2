# 1. How are data fetching & submission related to routing?

It's very common to fetch data as a new page is loaded. Similarily, it's very common to change the page after committing some action (e.g., after sending a request). Hence it makes sense to combine these tasks with routing. 

With React Router, you can load data right before a page is rendered and navigate to a different route after an action completed.

# 2. What’s the purpose of `loader()` functions?

`loader()` functions are executed (by React Router) whenever the route to which they belong gets activated. The route's component function is only rendered once the `loader()` function finished execution.

`loader()` functions are therefore typically used to fetch data that's required on a page. That data (which is returned by the `loader()` function) can then be accessed inside the component via React Router's `useLoaderData()` Hook.

# 3. What’s the purpose of `action()` functions?

`action()` functions registered for a route get called by React Router whenever a form is submitted to that route. 

Inside the `action()` function you then typically handle the form submission by validating the user input and/ or sending a HTTP request (with the submitted data) to a backend API.

`action()` functions can return any data of your choice. If you return a redirect response (e.g., created via React Router's `redirect()` function) React Router will navigate to the new page once the action completed.

# 4. What’s the difference between `<Form>` and `<form>`?

The default `<form>` element automatically creates and sends an HTTP request when submitted. You have to prevent that default (via `event.preventDefault()`) if you want to do anything else upon form submission.

React Router's `<Form>` component automatically prevents that default and insteads triggers the `action()` function registered for the route which is targeted.

# 5. What’s the difference between `useSubmit()` and `useFetcher()`?

Both `useSubmit()` and `useFetcher()` can be used to trigger `action()` functions programmatically.

The difference is that `useFetcher()` provides you with an object that can also be used for loading data (i.e., for triggering `loader()` functions) **and** that `useFetcher()` does not require a route transition. Instead, you can trigger a `loader()` or `action()` without changing the page.

# 6. What’s the idea behind `defer()`?

`defer()` allows you to start rendering a route's page component without waiting for all of the required data first. This can be useful when fetching slow data.
