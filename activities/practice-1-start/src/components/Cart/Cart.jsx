import { createPortal } from 'react-dom';

import classes from './Cart.module.css';

function Cart({ onClear, onClose, items }) {
  const total = items.reduce((prevVal, item) => prevVal + item.price, 0);

  function handleBuyClick() {
    onClear();
    onClose();
  }

  return createPortal(
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={onClose}>Close</button>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;
