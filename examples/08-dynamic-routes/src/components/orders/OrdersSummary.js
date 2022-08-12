import orders, { getOrdersSummaryData } from '../../data/orders';
import classes from './OrdersSummary.module.css';

function OrdersSummary() {
    const { quantity, total } = getOrdersSummaryData();

  return (
    <div className={classes.row}>
      <p className={classes.summary}>
        ${total.toFixed(2)} | {orders.length} Orders | {quantity} Products
      </p>
    </div>
  );
}

export default OrdersSummary;
