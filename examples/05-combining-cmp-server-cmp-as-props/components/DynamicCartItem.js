import fs from 'node:fs/promises';

export default async function DyncamicCartItem({ id }) {
  const data = await fs.readFile(`data/cart.json`, 'utf8');
  const storedCart = JSON.parse(data);
  const cartItem = storedCart.find((item) => item.id === id);

  return (
    <li>
      <article>
        <h2>{cartItem.title}</h2>
        <p>Quantity: {cartItem.quantity}</p>
      </article>
    </li>
  );
}
