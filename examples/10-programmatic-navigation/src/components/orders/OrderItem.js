function OrderItem({ order }) {
  let quantity = 0;
  let sum = 0;

  for (const product of order.products) {
    quantity += product.quantity;
    sum += product.price * product.quantity;
  }

  const date = new Date(order.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article>
      <h2>
        {quantity} Item{quantity > 1 ? 's' : ''} on {date}
      </h2>
      <p>${sum.toFixed(2)}</p>
    </article>
  );
}

export default OrderItem;
