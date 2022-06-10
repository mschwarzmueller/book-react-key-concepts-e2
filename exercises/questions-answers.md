1. Why does React use a virtual DOM to detect required DOM updates?

If React would reach out to the real DOM in order to calculate required UI updates, a lot of (unnecessary) DOM traversal and read operations would be performed.

Operations related to the real DOM are "expensive" (performance-wise) and hence should be kept to a minimum. That's why React uses a virtual DOM for deriving the expected and actual DOM structure and calculating changes based on those differences.

2. How is the real DOM affected when a component function is executed?

When a component function is executed, the real DOM is not affected at all initially. Because it's the virtual DOM that's used for calculating (possibly) required changes. Only if such changes are needed, React will reach out to the real DOM and implement those changes (e.g., remove an element, add an element etc.).

3. Which components are great candidates for the `memo()` function? Which components are bad candidates?

Components high up in the component tree or at the beginning of deeply nested component tree branches are great candidates. They are great candidates because by prevent unnecessary executions of a single component (the one wrapped with `memo()`), a lot of component re-evaluations further down the component tree can be prevented.

Bad candidates are simple components which wouldn't be too compute-intensive to re-evaluate or components that will have to change a lot anyways.

4. How is `useMemo()` different from `memo()`?

Unlike `memo()`, `useMemo()` is not used to wrap entire component functions but instead to wrap specific code snippets that are part of component functions. With `useMemo()`, you can partially disable code execution inside a component function.

5. What’s the idea behind code splitting and the `lazy()` function?

When a user first visits a website, all the JavaScript code needed for that site must be downloaded. Depending on the complexity of your React app, that may be a lot of code. And chances are high that at least some code isn't needed initially.

With code splitting (via `lazy()`, which is wrapped around a dynamic import), the code bundle is split up into multiple code bundles which are then downloaded only when they are needed.

