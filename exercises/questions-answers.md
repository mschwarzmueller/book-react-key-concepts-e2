# 1. Which problem can be solved with React’s context API?

The context API helps with managing cross-component state. It can simplify this process and help developers avoid "prop drilling". The context API therefore is an alternative to "lifting the state up".

# 2. Which three main steps have to be taken, when using the context API?

You have to create the context, provide it (via the `Provider` component) and use it via `useReducer()`. When providing the context, the value has to be set with help of the `value` prop of the `Provider` component.

# 3. When might `useReducer()` be preferred over `useState()`?

`useReducer()` can be a better choice than `useState()`, when dealing with complex state values. It's especially valuable if you're dealing with (deeply) nested or otherwise complex object values. It also helps avoid cross-state dependencies.

# 4. When working with `useReducer()`, what’s the role of actions?

Actions are dispatched to "tell" the reducer function what to do. When using the `dispatch` function, action data is passed as a first (and only) argument to the function. That data can take any shape, but typically, an object is used.

By using a `type` property (or a similar identifier) in the dispatched object, you can control execution flow in the reducer function. Extra payload data can also be passed along.