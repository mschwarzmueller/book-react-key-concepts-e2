import { use, useState } from 'react';

import CartContext from '../../store/cart-context.jsx';
import Cart from '../Cart/Cart.jsx';
import classes from './MainHeader.module.css';

function MainHeader() {
  const cartCtx = use(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState();

  function handleOpenCartModal() {
    setModalIsOpen(true);
  }

  function handleCloseCartModal() {
    setModalIsOpen(false);
  }

  const numCartItems = cartCtx.items.length;

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={handleOpenCartModal}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen && <Cart onClose={handleCloseCartModal} />}
    </>
  );
}

export default MainHeader;
