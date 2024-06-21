1. As a first step, create a `hooks/use-key-event.js` file. This file will hold the custom Hook function.

2. Create the `useKeyEvent` Hook function in the newly added `use-key-event.js` file. Also, export the `useKeyEvent` function so that it can be used in other files (it will be used in the `App` component later):

   ```js
   function useKeyEvent() {
     // logic to be added...
   }

   export default useKeyEvent;
   ```

3. Move the `useEffect()` import and call (and all the logic inside of it) from the `App` component body to the `useKeyEvent` function body:

   ```js
   import { useEffect } from 'react';

   function useKeyEvent() {
     useEffect(() => {
       function handlePressKey(event) {
         const pressedKey = event.key;

         if (!['s', 'c', 'p'].includes(pressedKey)) {
           alert('Invalid key!');
           return;
         }
         setPressedKey(pressedKey);
       }

       window.addEventListener('keydown', handlePressKey);

       return () => window.removeEventListener('keydown', handlePressKey);
     }, []);
   }

   export default useKeyEvent;
   ```

4. Make sure to remove that `useEffect()` logic (and the `useEffect` import) from the `App` component file.

   At the moment, the `useKeyEvent` Hook won't work correctly as there are multiple problems:

   - Inside the effect function, it's calling `setPressedKey(pressedKey)` without that function existing in the Hook function.
   - The custom Hook does not communicate with the component in which it might be used. It should return the key that was pressed (after validating that it's an allowed key).
   - The allowed keys (`'s'`, `'c'`, and `'p'`) are hardcoded into the custom Hook.

   These issues will be fixed over the next steps.

5. Start by adding state to the `useKeyEvent` Hook. Import and use `useState` to manage the `pressedKey` state:

   ```js
   import { useEffect, useState } from 'react';

   function useKeyEvent() {
     const [pressedKey, setPressedKey] = useState();

     // ... unchanged rest of the code
   }
   ```

6. Add a `return` statement at the end of the custom Hook function and return the `pressedKey` state value.

   Since it's the only value that must be returned, you don't need to group it into an array or object:

   ```js
   function useKeyEvent() {
     const [pressedKey, setPressedKey] = useState();

     useEffect(() => {
       // unchanged logic ...
     }, []);

     return pressedKey;
   }
   ```

7. Make the Hook more reusable by converting the hardcoded list of allowed keys (`['s', 'c', 'p']`) to a parameter (`allowedKeys`) that is received and used by the `useKeyEvent` Hook function.

   Don't forget to add the parameter variable as a dependency to the `useEffect()` dependencies array since the value is used inside of `useEffect()`:

   ```js
   import { useEffect, useState } from 'react';

   function useKeyEvent(allowedKeys) {
     const [pressedKey, setPressedKey] = useState();

     useEffect(() => {
       function handlePressKey(event) {
         const pressedKey = event.key;

         if (!allowedKeys.includes(pressedKey)) {
           alert('Invalid key!');
           return;
         }
         setPressedKey(pressedKey);
       }

       window.addEventListener('keydown', handlePressKey);

       return () => window.removeEventListener('keydown', handlePressKey);
     }, [allowedKeys]);

     return pressedKey;
   }

   export default useKeyEvent;
   ```

8. The custom Hook is now finished and hence can be used in other components. Import and use it in the `App` component like this:

   ```jsx
   import useKeyEvent from './hooks/use-key-event.js';

   function App() {
     const pressedKey = useKeyEvent(['s', 'c', 'p']);

     let output = '';

     if (pressedKey === 's') {
       output = ' 😊';
     } else if (pressedKey === 'c') {
       output = ' 😭';
     } else if (pressedKey === 'p') {
       output = ' 🎉';
     }

     return (
       <main>
         <h1>Press a key!</h1>
         <p>
           Supported keys: <kbd>s</kbd>, <kbd>c</kbd>, <kbd>p</kbd>
         </p>
         <p id="output">{output}</p>
       </main>
     );
   }

   export default App;
   ```
