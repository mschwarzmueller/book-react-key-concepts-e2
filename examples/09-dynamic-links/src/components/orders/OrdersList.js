import { Link } from 'react-router-dom';

import orders from '../../data/orders';
import OrderItem from './OrderItem';
import classes from './OrdersList.module.css';

function OrdersList() {
  return (
    <ul className={classes.list}>
      {orders.map((order) => (
        <li key={order.id}>
          <Link to={`/orders/${order.id}`}><OrderItem order={order} /></Link>
        </li>
      ))}
    </ul>
  );
}

export default OrdersList;
