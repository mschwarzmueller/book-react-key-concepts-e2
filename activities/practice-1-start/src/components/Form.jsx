function Form() {
  function handleSubmitForm(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="form-control">
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-control">
        <label htmlFor="program">Choose your program</label>
        <select id="program">
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
