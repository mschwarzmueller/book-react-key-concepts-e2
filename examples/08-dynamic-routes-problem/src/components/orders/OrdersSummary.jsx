import orders, { getOrdersSummaryData } from '../../data/orders.js';
import classes from './OrdersSummary.module.css';

function OrdersSummary() {
  const { quantity, total } = getOrdersSummaryData();

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  return (
    <div className={classes.row}>
      <p className={classes.summary}>
        {formattedTotal} | {orders.length} Orders | {quantity} Products
      </p>
    </div>
  );
}

export default OrdersSummary;
