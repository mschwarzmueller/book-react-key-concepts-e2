import { useNavigate } from 'react-router-dom';

import orders, { getOrdersSummaryData } from '../../data/orders.js';
import classes from './OrdersSummary.module.css';

function OrdersSummary() {
  const navigate = useNavigate();

  const { quantity, total } = getOrdersSummaryData();

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  function findOrderAction(formData) {
    const orderId = formData.get('order-id');
    const orderExists = orders.some((order) => order.id === orderId);

    if (!orderExists) {
      alert('Could not find an order for the entered id.');
      return;
    }

    navigate(`/orders/${orderId}`);
  }

  return (
    <div className={classes.row}>
      <p className={classes.summary}>
        {formattedTotal} | {orders.length} Orders | {quantity} Products
      </p>
      <form className={classes.form} action={findOrderAction}>
        <input
          type="text"
          name="order-id"
          placeholder="Enter order id"
          aria-label="Find an order by id."
        />
        <button>Find</button>
      </form>
    </div>
  );
}

export default OrdersSummary;
