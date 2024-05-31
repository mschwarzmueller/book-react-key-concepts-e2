import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const contextVal = {
    items: cartItems,
    addItem: handleAddItem,
    removeItem: handleRemoveItem
  }

  return <CartContext value={contextVal}>{children}</CartContext>;
}

export default CartContext;
