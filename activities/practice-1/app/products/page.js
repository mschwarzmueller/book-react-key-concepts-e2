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
