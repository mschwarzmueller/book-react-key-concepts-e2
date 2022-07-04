import { useContext, useState } from 'react';

import CartContext from '../../store/cart-context';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

function MainHeader({ cartItems }) {
  const cartCtx = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState();

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const numCartItems = cartCtx.items.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={closeCartModalHandler} />}
    </>
  );
}

export default MainHeader;
