import { useState } from 'react';

import Cart from '../Cart/Cart.jsx';
import classes from './MainHeader.module.css';

function MainHeader({ cartItems }) {
  const [modalIsOpen, setModalIsOpen] = useState();

  function handleOpenCartModal() {
    setModalIsOpen(true);
  }

  function handleCloseCartModal() {
    setModalIsOpen(false);
  }

  const numCartItems = cartItems.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={handleOpenCartModal}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={handleCloseCartModal} items={cartItems} />}
    </>
  );
}

export default MainHeader;
