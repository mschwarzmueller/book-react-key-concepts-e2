1. Use a new React project and remove the default JSX code returned by the `App` component. Instead, return a `<section>` that contains both a `<button>` (which will later be used to add a new product) and an (empty) `<ul>` element:

```jsx
import { useState } from 'react';

function App() {
  return (
    <section>
      <button>Add Product</button>
      <ul></ul>
    </section>
  );
}

export default App;
```

2. Add an array of initial dummy products to the `App` component. Use this array as the initial value for the `products` state that must be added to the `App` component:

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <section>
      <button>Add Product</button>
      <ul></ul>
    </section>
  );
}

export default App;
```

3. Output the list of `products` as part of the returned JSX code:

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <section>
      <button>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```

This example uses the `map()` method, but you could also use a `for...of` loop to populate an array with JSX elements, and then output that array as part of the JSX code.

It’s also up to you whether you create and output the list of JSX elements inline (that is, directly inside of the returned JSX code) or with the help of a separate variable or constant.

4. Add a `click` event handler to the `<button>`. Also, add a new function that is triggered upon `click` events on the button.

   Inside the function, update the `products` state such that a new (dummy) product is added. For the `id` value of that product, you can generate a pseudo-unique id by using a `new Date().getTime()`:

```jsx
import { useState } from 'react';

const INITIAL_PRODUCTS = [
  { id: 'p1', title: 'React - The Complete Guide [Course]', price: 19.99 },
  { id: 'p2', title: 'Stylish Chair', price: 329.49 },
  { id: 'p3', title: 'Ergonomic Chair', price: 269.99 },
  { id: 'p4', title: 'History Video Game Collection', price: 99.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  function handleAddProduct() {
    setProducts((curProducts) =>
      curProducts.concat({
        id: new Date().getTime(),
        title: 'Another new product',
        price: 15.99,
      })
    );
  }

  return (
    <section>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} (${product.price})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
```
