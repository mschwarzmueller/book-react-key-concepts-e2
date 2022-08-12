import { Outlet } from 'react-router-dom';
import OrderSearch from '../components/orders/OrderSearch';

function OrdersRoot() {
  return (
    <>
      <OrderSearch />
      <Outlet />
    </>
  );
}

export default OrdersRoot;
