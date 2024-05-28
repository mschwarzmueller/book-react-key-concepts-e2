import { useRef } from 'react';

function Form() {
  const nameRef = useRef();
  const programRef = useRef();

  function handleSubmitForm(event) {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const selectedProgram = programRef.current.value;

    console.log('Entered Name: ' + enteredName);
    console.log('Selected Program: ' + selectedProgram);
  }

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
}

export default Form;
