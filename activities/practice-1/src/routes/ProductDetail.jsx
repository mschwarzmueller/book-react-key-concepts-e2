import { useParams } from 'react-router-dom';

import products from '../data/products.js';

function ProductDetail() {
  const params = useParams();
  const prodId = params.id;
  const product = products.find((product) => product.id === prodId);

  return (
    <main id="product-detail">
      <h1>{product.title}</h1>
      <p id="product-price">${product.price}</p>
      <p>{product.description}</p>
    </main>
  );
}

export const Component = ProductDetail;
