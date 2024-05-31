import { useState } from 'react';

import Events from './components/Events/Events.jsx';
import MainHeader from './components/MainHeader/MainHeader.jsx';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddItem(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function handleRemoveItem(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <MainHeader cartItems={cartItems} />
      <main>
        <Events
          onAddItemToCart={handleAddItem}
          onRemoveItemFromCart={handleRemoveItem}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}

export default App;
