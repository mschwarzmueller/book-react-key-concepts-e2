import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <MainHeader cartItems={cartItems} />
      <main>
        <Events
          onAddItemToCart={addItemHandler}
          onRemoveItemFromCart={removeItemHandler}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}

export default App;
