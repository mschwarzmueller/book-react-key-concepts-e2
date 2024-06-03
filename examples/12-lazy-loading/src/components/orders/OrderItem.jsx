function OrderItem({ order }) {
  let quantity = 0;
  let sum = 0;

  for (const product of order.products) {
    quantity += product.quantity;
    sum += product.price * product.quantity;
  }

  const formattedSum = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(sum);

  const date = new Date(order.date).toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article>
      <h3>
        {quantity} Item{quantity > 1 ? 's' : ''} on {date}
      </h3>
      <p>{formattedSum}</p>
    </article>
  );
}

export default OrderItem;
