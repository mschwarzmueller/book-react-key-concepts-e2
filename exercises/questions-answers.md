1. How would you define a side effect?

A side effect is an action that's not directly working towards the main goal of a function.

2. What’s a potential problem that could arise with some side effects in React components?

Depending on the circumstances, side effects could lead to infinite loops (if performed directly inside the component function). 

3. How does the `useEffect()` Hook work?

`useEffect()` accepts two arguments: an effect function that wraps the side effect and an (optional) array of dependencies.

The effect function contains the side effect code and is executed after every component function invocation. The array of dependencies should contain all values, variables or functions used in the effect function. This array of dependencies controls how often the effect function is executed by React (whenever any dependency changes).

4. Which values should **not** be added to the `useEffect()` dependencies array?

You should not add any values that are defined and used inside of the effect function, any external values or functions (defined outside of the component function) or state updating functions.

5. Which value can be returned by the effect function? And which kind of value must not be returned?

You can (optionally) return a cleanup function which will be executed right before the effect function is executed the next time. You must not return an asynchronous function (a `Promise`).
