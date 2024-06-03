import { useParams } from 'react-router-dom';

import Details from '../components/orders/Details.jsx';
import { getOrderById } from '../data/orders.js';

function OrderDetail() {
  const params = useParams();
  const orderId = params.id;
  const order = getOrderById(orderId);

  return <Details order={order} />;
}

export default OrderDetail;
