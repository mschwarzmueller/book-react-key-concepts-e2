# 1. What is the definition of a custom Hook?

A custom Hook is a regular JavaScript function. It becomes a custom Hook by adding `use` as a prefix to the function name.
Without that prefix, React would produce an error as soon as you tried to use another Hook in that function.

# 2. Which special feature can be used inside a custom Hook?

You can use other Hooks inside of custom Hooks. That is true for built-in and other custom Hooks.

# 3. What happens when multiple components use the same custom Hook?

Every component receives its own "instance" (its own "version") of that Hook. State managed by a custom Hook is **not** shared across components. Side effects would also be triggered on a per-component basis.

# 4. How can custom Hooks be made more re-usable?

You can accept parameters to change the logic inside of a custom Hook. You could, for example, accept a `url` parameter to configure the URL to which an HTTP request is sent.

You can also return any values you want, to make sure that just the right data is exposed to the components that use the Hook.