import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const contextVal = {
    items: cartItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return <CartContext.Provider value={contextVal}>{children}</CartContext.Provider>;
}

export default CartContext;
