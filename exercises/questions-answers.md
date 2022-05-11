1. How can refs help with handling user input in forms?

Refs can be created via `useRef()` and be used to gain direct access to DOM elements. This can be helpful if you, for example, want to extract (i.e., read) the value entered by a user into an `<input>` element.
Compared to using state (via `useState()`), refs require a bit less code and hence can lead to leaner components.

2. What is an uncontrolled component?

A component where React is not in direct control of the DOM state. Instead, a ref might be used to read (or even change) a DOM element.

3. What is a controlled component?

A component where React controls the UI state entirely (via `useState()`).

4. When should you not use refs?

You should avoid using refs when it comes to manipulating DOM elements. Niche-cases like using the `focus()` method on an `<input>` element are acceptable but you should, for example, not start editing `<input>` values or anything like this.

5. What’s the main idea behind portals?

The portal feature (via `createPortal()`) allows you to instruct React to render JSX elements in a different place in the DOM than it normally would.
