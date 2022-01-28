# 1. Which “problem” does state solve?

State allows developers to manage data which, when changed, causes React to re-evaluate (re-execute) the component for which the state was registered. This is a key feature which allows developers to build truly dynamic React applications.

# 2. What’s the difference between “props” and “state”?

Props are used for passing data from parent to child components. It's a feature that allows developers to build re-usable components ("UI building blocks"). State on the other hand allows developers to change data and force UI updates, as described above.

# 3. How is state registered in a component?

State is registered by calling the built-in `useState()` hook that is provided by React. It's a standard JavaScript function that is handled in a special way internally by React. When calling `useState()`, a new state value is registered in and tied to a component. When the state value is updated, the component is re-evaluated by React.

# 4. Which values does the useState() hook provide?

`useState()` returns an array with exactly two elements:

- The first element is the current state value
- The second element is a function that should be called to update the state value

# 5. How many state values can be registered for a single component?

As many as you want / need.

# 6. Does state affect other components (than the component in which it was registered) as well?

Yes. When a component is re-evaluated because of a state change, React will also re-evaluate any child components (since it will parse and execute the entire JSX code again).

# 7. How should state be updated if the new state depends on the previous state?

In such cases, a function should be passed as a value to the state updating function. React will call this function automatically and provide the previous state value as an argument to the function. Therefore, the provided function should accept a parameter and return the updated value, which may be based on that parameter (i.e. which is based on the previous state value).

# 8. How can state be shared across multiple components?

State can be "lifted up" to a common ancestor component. Since child components are re-evaluated together with the component that uses state, those components will be updated as well.
