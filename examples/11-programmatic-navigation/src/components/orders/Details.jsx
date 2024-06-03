import { formatDate, getOrderSummaryData } from '../../data/orders.js';
import classes from './Details.module.css';

function Details({ order }) {
  const { quantity, total } = getOrderSummaryData(order.id);
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  return (
    <>
      <h1 className={classes.title}>
        <span>{formatDate(order.date)}</span>
        <span className={`${classes.badge} ${classes[order.status]}`}>
          {order.status}
        </span>
      </h1>
      <p className={classes.meta}>
        {formattedTotal} | {quantity} PRODUCTS SHIPPED
      </p>
      <ul className={classes.products}>
        {order.products.map((product) => {
          const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(product.price);
          return (
            <li key={product.id}>
              <article>
                <h2>{product.title}</h2>
                <p>
                  <span className={classes.total}>
                    ${product.quantity * product.price}
                  </span>{' '}
                  <span className={classes.calculation}>
                    ({product.quantity} x {formattedPrice})
                  </span>
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Details;
