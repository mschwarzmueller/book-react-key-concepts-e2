export default function CartItem({ title, quantity }) {
  return (
    <li>
      <article>
        <h2>{title}</h2>
        <p>Quantity: {quantity}</p>
      </article>
    </li>
  );
}
