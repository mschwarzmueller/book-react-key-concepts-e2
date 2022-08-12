import { formatDate, getOrderSummaryData } from '../../data/orders';
import classes from './Details.module.css';

function Details({ order }) {
  const {quantity, total} = getOrderSummaryData(order.id);

  return (
    <>
      <h1 className={classes.title}>
        <span>{formatDate(order.date)}</span>
        <span className={`${classes.badge} ${classes[order.status]}`}>{order.status}</span>
      </h1>
      <p className={classes.meta}>${total.toFixed(2)} | {quantity} PRODUCTS SHIPPED</p>
      <ul className={classes.products}>
        {order.products.map((product) => (
          <li key={product.id}>
            <article>
              <h2>{product.title}</h2>
              <p>
                <span className={classes.total}>
                  ${product.quantity * product.price}
                </span>{' '}
                <span className={classes.calculation}>
                  ({product.quantity} x ${product.price})
                </span>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Details;
