1. As a first step, create a `store/cart-context.jsx` file. This file will hold the context object and the context provider component that contains the cross-component state logic.

2. In the newly added `cart-context.jsx` file, create a new `CartContext` via React's `createContext()` function.

   To get better IDE auto-completion, the initial context value can be set to an object that has an `items` property (an empty array) and three methods: an (empty) `addItem`, an (empty) `removeItem` and an (also empty) `clearCart` method.

   The created context also must be exported, so that it can be referenced by other project files.

   This is the final `cart-context.jsx` file content (for the moment):

   ```jsx
   import { createContext } from 'react';

   const CartContext = createContext({
     items: [],
     addItem: () => {},
     removeItem: () => {},
     clearCart: () => {},
   });

   export default CartContext;
   ```

3. To provide the context, the created `CartContext` object will be used. This object is a React component and can therefore be used as such in JSX code (Note: when working with React < 19, you would use `CartContext.Provider`).

   To manage the cross-component state in a central place (and not bloat any other component with that logic), you should add an extra React component to the `cart-context.jsx` file: a `CartContextProvider` component.

   That component returns its `children` (i.e., content passed between its opening and closing tags), wrapped by `CartContext`:

   ```jsx
   export function CartContextProvider({ children }) {
     return <CartContext>{children}</CartContext>;
   }
   ```

4. The `CartContext` component requires a `value` prop. That `value` prop contains the actual value that is distributed to all components that subscribe to the context.

   In this project, the `value` prop is set equal to an object that contains an `items` property and the three methods defined in the initial context value previously (in Step 2).

   The three methods (`addItem`, `removeItem` and `clearCart`) are empty named functions for the moment but will be populated with logic over the next steps, as follows:

   ```jsx
   export function CartContextProvider({ children }) {
     function handleAddItem(item) {
       // to be added ...
     }

     function handleRemoveItem(itemId) {
       // to be added ...
     }

     function handleClearCart() {
       // to be added ...
     }

     const contextVal = {
       items: cartItems,
       addItem: handleAddItem,
       removeItem: handleRemoveItem,
       clearCart: handleClearCart,
     };

     return <CartContext value={contextVal}>{children}</CartContext>;
   }
   ```

5. To make the context value dynamic, the `CartContextProvider` component must start managing state (via `useState()`) and distribute that state via the context value.

   In order to trigger state updates, appropriate logic must be added to `handleAddItem`, `handleRemoveItem` and `handleClearCart`. The final `cart-context.jsx` file therefore contains the following code:

   ```jsx
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
       setCartItems((prevItems) =>
         prevItems.filter((item) => item.id !== itemId)
       );
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
   ```

6. Now that all cross-component state management logic has been moved into the `CartContextProvider` component, that code must be removed from the `App` component (where cross-component state was managed before, when it was lifted up).

   You also must remove all props (and their usage) that were used for passing cart-item-related state down to other components. For the moment, the `App` component looks like this:

   ```jsx
   import Events from './components/Events/Events.jsx';
   import MainHeader from './components/MainHeader/MainHeader.jsx';

   function App() {
     return (
       <>
         <MainHeader />

         <main>
           <Events />
         </main>
       </>
     );
   }

   export default App;
   ```

7. The `CartContextProvider` component must be wrapped around that part of the overall application component tree that needs access to the context.

   In this example app, that means that all JSX code in the `App.jsx` file should be wrapped (since both `MainHeader` and the `Events` component need access to the context value):

   ```jsx
   import Events from './components/Events/Events.jsx';
   import MainHeader from './components/MainHeader/MainHeader.jsx';
   import { CartContextProvider } from './store/cart-context.jsx';

   function App() {
     return (
       <>
         <CartContextProvider>
           <MainHeader />

           <main>
             <Events />
           </main>
         </CartContextProvider>
       </>
     );
   }

   export default App;
   ```

8. Now, all components that need context access (either for reading the context value or for calling one of the exposed context value methods) can subscribe to the context via React's `use()` Hook (Note: when working with React < 19, you would use the `useContext()` Hook instead).

   In this example project, the `MainHeader`, `EventItem`, and `Cart` components need access. The `MainHeader` component therefore uses the `use()` Hook (and the received context value) like this:

   ```jsx
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
   ```

9. Ensure the `EventItem` component looks like this:

   ```jsx
   import { use } from 'react';

   import CartContext from '../../store/cart-context.jsx';
   import classes from './EventItem.module.css';

   function EventItem({ event }) {
     const cartCtx = use(CartContext);

     const isInCart = cartCtx.items.some((item) => item.id === event.id);

     let buttonCaption = 'Add to Cart';
     let buttonAction = () => cartCtx.addItem(event);

     if (isInCart) {
       buttonCaption = 'Remove from Cart';
       buttonAction = () => cartCtx.removeItem(event.id);
     }

     return (
       <li className={classes.event}>
         <img src={event.image} alt={event.title} />
         <div className={classes.content}>
           <h2>{event.title}</h2>
           <p className={classes.price}>${event.price}</p>
           <p>{event.description}</p>
           <div className={classes.actions}>
             <button onClick={buttonAction}>{buttonCaption}</button>
           </div>
         </div>
       </li>
     );
   }

   export default EventItem;
   ```

10. And confirm that the `Cart` component contains this code:

    ```jsx
    import { use } from 'react';
    import { createPortal } from 'react-dom';

    import CartContext from '../../store/cart-context.jsx';
    import classes from './Cart.module.css';

    function Cart({ onClose }) {
      const cartCtx = use(CartContext);

      const total = cartCtx.items.reduce(
        (prevVal, item) => prevVal + item.price,
        0
      );

      function handleBuyClick() {
        cartCtx.clearCart();
        onClose();
      }

      return createPortal(
        <>
          <div className={classes.backdrop} onClick={onClose} />
          <aside className={classes.cart}>
            <h2>Your Cart</h2>
            <ul>
              {cartCtx.items.map((item) => (
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
    ```
