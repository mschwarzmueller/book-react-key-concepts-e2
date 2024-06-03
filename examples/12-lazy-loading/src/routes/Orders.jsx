import OrdersList from '../components/orders/OrdersList.jsx';
import OrdersSummary from '../components/orders/OrdersSummary.jsx';

function Orders() {
  return (
    <>
      <OrdersSummary />
      <OrdersList />
    </>
  );
}

export const Component = Orders;