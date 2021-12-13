# 1. Which "problem" do props solve?

Props allow React developers to make components configurable and therefore actually reusable. Different prop values can be passed to one and the same component, hence reusing that component's JSX structure and logic with different pieces of data.

# 2. How are props passed into components?

Props are passed as attributes on the JSX tags of custom components. A special prop can be set by passing a value between the opening and closing component tags: The built-in `children` prop.

All attributes that are set on a custom component tag, as well as the content between the component tags, are picked up by React and grouped together into a "props" object that is passed into every component function automatically.

# 3. How are props consumed inside of a component function?

The props are passed as an argument to your component functions by React - automatically and grouped as an object. Inside the component function, props can therefore be consumed by accepting a "props" parameter (the first parameter of the function).

# 4. Which options exist for passing (multiple) props into components?

When passing multiple props, you can either provide mutiple attributes (i.e. many key-value pairs) and / or group prop values together into an object or array and pass that object / array as a single attribute to a component.

Inside the component function, you can also use "object destructuring" to pull prop values out of the received "props" object.