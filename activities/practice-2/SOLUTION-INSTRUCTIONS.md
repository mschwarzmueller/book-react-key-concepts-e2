1. Add the conditional rendering logic by adding a `drawerIsOpen` state (via `useState()`) to the `MainNavigation` component.

   Set the state to `false` initially in a function that should later be executed whenever the backdrop is clicked, while setting the state to `true` in a function that is executed upon a click of the menu button:

   ```jsx
   import { useState } from 'react';

   import SideDrawer from './SideDrawer.jsx';
   import classes from './MainNavigation.module.css';

   function MainNavigation() {
     const [drawerIsOpen, setDrawerIsOpen] = useState(false);

     function handleOpenDrawer() {
       setDrawerIsOpen(true);
     }

     function handleCloseDrawer() {
       setDrawerIsOpen(false);
     }

     return (
       <>
         <header className={classes.header}>
           <h1>Demo App</h1>
           <button className={classes.btn} onClick={handleOpenDrawer}>
             <div />
             <div />
             <div />
           </button>
         </header>
         {drawerIsOpen && <SideDrawer />}
       </>
     );
   }

   export default MainNavigation;
   ```

2. Pass a pointer to the `handleCloseDrawer` function to the `SideDrawer` component (here, this is via a prop called `onClose`: `<SideDrawer onClose={handleCloseDrawer} />`) and execute that function inside the `SideDrawer` component whenever the `<div>` backdrop is clicked:

   ```jsx
   import classes from './SideDrawer.module.css';

   function SideDrawer({ onClose }) {
     return (
       <>
         <div className={classes.backdrop} onClick={onClose} />
         <aside className={classes.drawer}>
           <nav>
             <ul>
               <li>
                 <a href="/">Dashboard</a>
               </li>
               <li>
                 <a href="/products">All Products</a>
               </li>
               <li>
                 <a href="/profile">Your Profile</a>
               </li>
             </ul>
           </nav>
         </aside>
       </>
     );
   }

   export default SideDrawer;
   ```

3. To control where the side drawer JSX elements are inserted into the DOM, use React's portal feature. As a first step, add an "injection hook" to the `index.html` file:

   ```html
   <body>
     <div id="root"></div>
     <div id="drawer"></div>
     <script type="module" src="/src/main.jsx"></script>
   </body>
   ```

   In this case, `<div id="drawer">` was inserted at the end of the `<body>` element to make sure that it would be positioned (visually) above any other overlays that might exist.

4. Use the newly added hook (`<div id="drawer">`) and the `createPortal()` function of `react-dom` inside the `SideDrawer` component to instruct React to render the component's JSX code in this specific place in the DOM:

    ```jsx
    import { createPortal } from 'react-dom';

    import classes from './SideDrawer.module.css';

    function SideDrawer({ onClose }) {
      return createPortal(
        <>
          <div className={classes.backdrop} onClick={onClose} />
          <aside className={classes.drawer}>
            <nav>
              <ul>
                <li>
                  <a href="/">Dashboard</a>
                </li>
                <li>
                  <a href="/products">All Products</a>
                </li>
                <li>
                  <a href="/profile">Your Profile</a>
                </li>
              </ul>
            </nav>
          </aside>
        </>,
        document.getElementById('drawer')
      );
    }

    export default SideDrawer;
    ```
