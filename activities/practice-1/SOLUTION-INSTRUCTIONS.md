1. Create a new React project via `npm create vite@latest <project>` as explained in _Chapter 1, React: What & Why?_. Then, install the React Router library by running `npm install react-router-dom` inside the project folder.

2. For the three required pages, create three components: a `Welcome` component, a `Products` component, and a `ProductDetail` component.

   Store these components in files inside the `src/routes` folder since these components will only be used for routing.

   For the `Welcome` component, enter the following code:

   ```jsx
   // src/routes/Welcome.jsx
   function Welcome() {
     return (
       <main>
         <h1>Welcome to our shop!</h1>
         <p>Please explore our products or share this site with others.</p>
       </main>
     );
   }

   export default Welcome;
   ```

   To create the `Products` component, write the following code:

   ```jsx
   // src/routes/Products.jsx

   import products from '../data/products.js';

   function Products() {
     return (
       <main>
         <h1>Our Products</h1>
         <ul id="products-list">
           {products.map((product) => (
             <li key={product.id}>
               {product.title} (${product.price})
             </li>
           ))}
         </ul>
       </main>
     );
   }

   export default Products;
   ```

   The code for the `ProductDetail` component will look as follows:

   ```jsx
   // src/routes/ProductDetail.jsx

   function ProductDetail() {
     return (
       <main>
         <h1>PRODUCT TITLE</h1>
         <p id="product-price">$PRODUCT PRICE</p>
         <p>PRODUCT DESCRIPTION</p>
       </main>
     );
   }

   export default ProductDetail;
   ```

3. At the moment, no routing logic has been added yet. Therefore, dummy content such as `"PRODUCT TITLE"` is output in `ProductDetail`. This will change later.

4. With the components added, it's time to add route definitions. For this, you must first enable React Router by importing and using the `createBrowserRouter()` function and the `RouterProvider` component (in the `App` component):

   ```jsx
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';

   const router = createBrowserRouter([]);

   function App() {
     return <RouterProvider router={router} />;
   }

   export default App;
   ```

5. As an argument to the `createBrowserRouter()` function, provide an array of route definitions for the three routes. For each route definition, you must add a `path` and an `element` property—the latter of which should render the respective component that belongs to the route:

   ```jsx
   import { createBrowserRouter, RouterProvider } from 'react-router-dom';

   import ProductDetail from './routes/ProductDetail.jsx';
   import Products from './routes/Products.jsx';
   import Welcome from './routes/Welcome.jsx';

   const router = createBrowserRouter([
     { path: '/', element: <Welcome /> },
     { path: '/products', element: <Products /> },
     { path: '/products/:id', element: <ProductDetail /> },
   ]);

   function App() {
     return <RouterProvider router={router} />;
   }

   export default App;
   ```

   The paths are up to you, but with the provided page descriptions, `/`, `/products`, and `/products/:id` are sensible choices. Though, instead of `:id`, you could, of course, use `:productId` or any other identifier.

6. The website should also have a main navigation bar. Therefore, as a next step, create a `MainNavigation` component and store it in an `src/components/MainNavigation.jsx` file.

   It's not a component that will be assigned directly to a route, and therefore it does not go in the `src/routes` folder. Inside the `MainNavigation` component, you should render a `<header>` element that contains a `<nav>` element, which then outputs a list (`<ul>`) of links. The actual links, however, will be added in a later step:

   ```jsx
   function MainNavigation() {
     return (
       <header id="main-nav">
         <nav>
           <ul>
             <li>Home</li>
             <li>Our Products</li>
           </ul>
         </nav>
       </header>
     );
   }

   export default MainNavigation;
   ```

7. Next, create a root layout route that wraps the existing three routes. This layout route can then be used to share the `<MainNavigation>` component across all three routes.

   The `routes/Root.jsx` file looks like this:

   ```jsx
   import { Outlet } from 'react-router-dom';

   import MainNavigation from '../components/MainNavigation.jsx';

   export default function Root() {
     return (
       <>
         <MainNavigation />
         <Outlet />
       </>
     );
   }
   ```

   It’s then used in the updated route definitions in `App.jsx`:

   ```jsx
   import Root from './routes/Root.jsx';
   // other imports

   const router = createBrowserRouter([
     {
       path: '/',
       element: <Root />,
       children: [
         { index: true, element: <Welcome /> },
         { path: '/products', element: <Products /> },
         { path: '/products/:id', element: <ProductDetail /> },
       ],
     },
   ]);
   ```

8. It's time to add some links. Place one link in the `Welcome` component. There, the text `"our products"` (in `'Please explore "Our Products" …'`) should be turned into a link.

   Since it's an internal link, use the `<Link>` element:

   ```jsx
   import { Link } from 'react-router-dom';

   function Welcome() {
     return (
       <main>
         <h1>Welcome to our shop!</h1>
         <p>
           Please explore
           <Link to="/products">our products</Link>
           or share this site with others.
         </p>
       </main>
     );
   }

   export default Welcome;
   ```

9. In the `MainNavigation` component, use `NavLink` so that the navigation items reflect whether or not they are linked to the currently active route:

   ```jsx
   import { NavLink } from 'react-router-dom';

   function MainNavigation() {
     return (
       <header id="main-nav">
         <nav>
           <ul>
             <li>
               <NavLink to="/">Home</NavLink>
             </li>
             <li>
               <NavLink to="/products">Our Products</NavLink>
             </li>
           </ul>
         </nav>
       </header>
     );
   }

   export default MainNavigation;
   ```

10. More links must be added to the `Products` component. In the list of products that's rendered there, ensure every list item links to the `ProductDetail` component (i.e., to the `/products/:id` route). The link, therefore, must be generated dynamically with the help of the product id:

    ```jsx
    import { Link } from 'react-router-dom';

    import products from '../data/products.js';

    function Products() {
      return (
        <main>
          <h1>Our Products</h1>
          <ul id="products-list">
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {product.title} (${product.price})
                </Link>
              </li>
            ))}
          </ul>
        </main>
      );
    }

    export default Products;
    ```

11. To finish this project, dynamic product detail data must be output in the `ProductDetail` component. For this, use the `useParams()` Hook to get access to the product id that's encoded in the URL path.

    With the help of that ID, you can find the product that's needed and output its data:

    ```jsx
    import { useParams } from 'react-router-dom';

    import products from '../data/products.js';

    function ProductDetail() {
      const params = useParams();
      const prodId = params.id;
      const product = products.find((product) => product.id === prodId);

      return (
        <main>
          <h1>{product.title}</h1>
          <p id="product-price">${product.price}</p>
          <p>{product.description}</p>
        </main>
      );
    }

    export default ProductDetail;
    ```

12. Finally, implement lazy loading by using React Router’s built-in support via the `lazy` property. Add the `lazy` property to the `/products` and `/products/:id` routes since these routes are unlikely to be loaded initially. Set `lazy` to a function that imports the files dynamically.

    ```jsx
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';

    import Root from './routes/Root.jsx';
    import Welcome from './routes/Welcome.jsx';

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Root />,
        children: [
          { index: true, element: <Welcome /> },
          {
            path: '/products',
            lazy: () => import('./routes/Products.jsx'),
          },
          {
            path: '/products/:id',
            lazy: () => import('./routes/ProductDetail.jsx'),
          },
        ],
      },
    ]);

    function App() {
      return <RouterProvider router={router} />;
    }

    export default App;
    ```

    Also make sure that the `Products.jsx` and `ProductDetail.jsx` files have a named export called `Component` (which points at the component function).

    ```jsx
    import { Link } from 'react-router-dom';

    import products from '../data/products.js';

    function Products() {
      return (
        <main>
          <h1>Our Products</h1>
          <ul id="products-list">
            {products.map((product) => (
              <li key={product.id}>
                <Link to={`/products/${product.id}`}>
                  {product.title} (${product.price})
                </Link>
              </li>
            ))}
          </ul>
        </main>
      );
    }

    export const Component = Products;
    ```
