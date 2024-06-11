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
