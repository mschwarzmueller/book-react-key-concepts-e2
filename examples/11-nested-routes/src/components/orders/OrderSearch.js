import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import orders from '../../data/orders';
import classes from './OrderSearch.module.css';

function OrderSearch() {
  const orderIdInputRef = useRef();
  const navigate = useNavigate();

  function findOrderHandler(event) {
    event.preventDefault();
    const orderId = orderIdInputRef.current.value;
    const orderExists = orders.some((order) => order.id === orderId);

    if (!orderExists) {
      alert('Could not find an order for the entered id.');
      return;
    }

    navigate(`/orders/${orderId}`);
  }

  return (
    <div className={classes.row}>
      <form className={classes.form} onSubmit={findOrderHandler}>
        <input
          type="text"
          placeholder="Enter order id"
          aria-label="Find an order by id."
          ref={orderIdInputRef}
        />
        <button>Find</button>
      </form>
    </div>
  );
}

export default OrderSearch;
