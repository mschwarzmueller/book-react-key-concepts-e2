import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');

  function handleUpdateTitle(event) {
    setEnteredTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={handleUpdateTitle} value={enteredTitle} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default NewPost;
