import { Link } from 'react-router-dom';

import orders from '../../data/orders.js';
import OrderItem from '../orders/OrderItem.jsx';
import DashboardElement from './DashboardElement.jsx';
import classes from './LatestOrders.module.css';

function LatestOrders() {
  const latestOrders = [...orders]
    .sort((o1, o2) => (o1.date > o2.date ? -1 : 1))
    .slice(0, 3);

  return (
    <DashboardElement>
      <h2>Latest Orders</h2>
      <ul className={classes.orders}>
        {latestOrders.map((order) => (
          <li key={order.id} className={classes.item}>
            <Link to="/orders">
              <OrderItem order={order} />
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/orders" className={classes.button}>
        View all Orders
      </Link>
    </DashboardElement>
  );
}

export default LatestOrders;
