1. Create the required `/products` and `/products/<some-id>` routes by adding two new, nested folders (with `page.js` files inside them) into the `app/` folder: `app/products/page.js` and `app/products/[productId]/page.js`.

2. Copy the `data.js` file from the finished project from activity 13.1 into a newly added `lib/` folder in the Next.js project.

3. Update the `app/products/page.js` file to import and use the migrated `data.js` file. Return the same JSX code as used in activity 13.1.

   Also import and use the `Link` component provided by Next.js. It should look like this:

```jsx
import Link from 'next/link';

import products from '../lib/products';

export default function ProductsPage() {
  return (
    <main>
      <h1>Our Products</h1>
      <ul id="products-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title} (${product.price})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
```

4. Update the `app/products/[productId]/page.js` file to output the same content as it did in activity 13.1.

   Import the `data.js` file from the `lib/` folder. Get access to the product id via the `params` prop that’s provided by Next.js. The finished file should contain the following code:

```jsx
import products from '../../lib/products';

export default function ProductDetailPage({ params }) {
  const prodId = params.productId;
  const product = products.find((product) => product.id === prodId);

  return (
    <main id="product-detail">
      <h1>{product.title}</h1>
      <p id="product-price">${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}
```

If you chose a different identifier between the square brackets in the folder name, you’ll have to use that identifier for extracting the product id from the path.

5. Update the main page (`app/page.js`) file to use Next.js `Link` component. It should look like this:

```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to our shop!</h1>
      <p>
        Please explore <Link href="/products">our products</Link> or share this
        site with others.
      </p>
    </main>
  );
}
```

6. Add a `components/` folder next to `app/` (though you could also add it inside `app/`, it is up to you) and copy the `MainNavigation.jsx` file into that folder.

   To be in-line with the other file extensions in this project, change it from `.jsx` to `.js`.

7. Inside `MainNavigation.js`, use Next.js’ `Link` component instead the one provided by React Router.

   Also set the `active` CSS class dynamically with help of the `className` prop and the `usePathname()` Hook. To use that Hook, add the `"use client"` directive at the top of the file.

   The finished file should contain this code:

```jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function MainNavigation() {
  const path = usePathname();
  return (
    <header id="main-nav">
      <nav>
        <ul>
          <li>
            <Link className={path === '/' ? 'active' : undefined} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className={path.startsWith('/products') ? 'active' : undefined}
              href="/products"
            >
              Browse Products
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
```

8. Import and output the `MainNavigation` component in the root layout component.

9. Finally, replace the styles in `globals.css` with the ones from the `index.css` file from activity 13.1.

   Import `globals.css` into the `app/layout.js` file.

   The finished file should look like this:

```jsx
import MainNavigation from '../components/MainNavigation';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
```
