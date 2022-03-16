# 1. With which language are styles for React components defined?

You can use CSS, no special language or React-specific approach has to be used.

# 2. Which important difference, compared to projects without React, has to be kept in mind when it comes to assigning classes to elements?

CSS classes are normally assigned to elements via the `class` attribute. When working with JSX, that becomes `className`!

# 3. How can styles be assigned dynamically and conditionally?

Just as any value can be set or assigned dynamically / conditionally. You can set the `style` or `className` props to both hard-coded / static and dynamic or conditional values (by using single curly braces).

# 4. What does "Scoping" mean in the context of styling?

"Scoping" refers to the restriction of styles to a specific component. If styles would be scoped to a component, they could not clash with similar styles assigned elsewhere. This matters when working with CSS class names. Since CSS, by default, is global, duplicate class names, defined in different places, would clash and overwrite each other.
If styles were scoped to a component, they would not do that. Out of the box, styles aren't scoped though.

# 5. How could styles be scoped to components? Briefly explain at least one concept that helps with scoping.

Different approaches and third-party libraries can help with scoping. One popular approach, that's supported by projects created via `create-react-app` by default, is the usage of CSS Modules.
When using CSS Modules, class names get transformed to unique class names during the build process. Therefore, every component has its own, unique class names which can't clash with similar class names defined elsewhere.
