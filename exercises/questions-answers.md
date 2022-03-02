# 1. What is "conditional content"?

Conditional content is content that is only rendered if certain conditions are met. You could, for example, only render a `<p>` if a button was clicked.

# 2. Name at least two different ways of rendering JSX elements conditionally.

- With help of `if` statements (set a variable to different values for different conditions)
- With help of ternary expressions (set a variable to different values for different conditions)

You can also "abuse" the JavaScript logical "and" operator (`&&`). Ternary epxressions and the `&&` operator can be used to store different data in variables **or** to "inline", directly inside of a component's JSX code.

# 3. Which elegant approach can be used to define element tags conditionally?

You can store the desired element type in a (conditionally set) variable. Built-in components like `<p>` or `<a>` can be store by storing the tag names (`p` or `a`) in variables. Custom components can be stored by storing a pointer at the custom component function.

# 4. What's a potential downside of using only ternary expressions (for conditional content)?

Ternary expressions can sometimes be difficult to read or understand, especially if nested and / or more complex content is handled with them.

# 5. How can lists of data be rendered as JSX elements?

You can use `for` loops for populating arrays with JSX elements. JSX is capable of converting an array of JSX elements into multiple sibling JSX elements.
As an alternative to `for` loops, you can use the `map()` method to map an array of any kind of data into an array of JSX elements.

# 6. Why should keys be added to rendered list items?

Keys helps React with identifying rendered DOM elements. Keys therefore help React avoid re-rendering unchanged JSX elements unnecessarily.

# 7. Give one example each for both a good and a bad key.

Good key: A unique id that is attached to some data (e.g. a user id attached to more user data)

Bad key: A random number that's re-generated frequently.