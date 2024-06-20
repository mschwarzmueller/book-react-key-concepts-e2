import { createContext, useState } from 'react';

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  const contextVal = {
    items: cartItems,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    clearCart: handleClearCart,
  };

  return <CartContext value={contextVal}>{children}</CartContext>;
}

export default CartContext;
