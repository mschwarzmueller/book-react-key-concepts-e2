1. Inside the `Form` component, create two ref objects via `useRef()`.

   Make sure that you don't forget to add `import { useRef } from 'react'`:

   ```jsx
   import { useRef } from 'react';
   function Form() {
     const nameRef = useRef();
     const programRef = useRef();
     // ... other code ...
   }
   ```

2. Still in the `Form` component, connect the ref objects to their respective JSX elements (`<input>` and `<select>`) via the special `ref` prop:

   ```jsx
   return (
     <form onSubmit={handleSubmitForm}>
       <div className="form-control">
         <label htmlFor="name">Your name</label>
         <input type="text" id="name" ref={nameRef} />
       </div>
       <div className="form-control">
         <label htmlFor="program">Choose your program</label>
         <select id="program" ref={programRef}>
           <option value="basics">The Basics</option>
           <option value="advanced">Advanced Concepts</option>
           <option value="mastery">Mastery</option>
         </select>
       </div>
       <button>Submit</button>
     </form>
   );
   ```

3. In the `handleSubmitForm` function, extract the entered values by accessing the connected ("stored") DOM elements via the special `current` property on the ref object.

   Also output the extracted values to the console via `console.log()`:

    ```jsx
    function handleSubmitForm(event) {
      event.preventDefault();

      const enteredName = nameRef.current.value;
      const selectedProgram = programRef.current.value;

      console.log('Entered Name: ' + enteredName);
      console.log('Selected Program: ' + selectedProgram);
    }
    ```
