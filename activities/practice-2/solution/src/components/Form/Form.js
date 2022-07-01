import { useReducer } from 'react';

import classes from './Form.module.css';

const initialFormState = {
  email: {
    value: '',
    isValid: false,
  },
  password: {
    value: '',
    isValid: false,
  },
};

function formReducer(state, action) {
  if (action.type === 'EMAIL_CHANGE') {
    return {
      ...state,
      email: {
        value: action.payload,
        isValid: action.payload.includes('@'),
      },
    };
  }

  if (action.type === 'PASSWORD_CHANGE') {
    return {
      ...state,
      password: {
        value: action.payload,
        isValid: action.payload.trim().length > 7,
      },
    };
  }

  return initialFormState;
}

function Form() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const formIsValid = formState.email.isValid && formState.password.isValid;

  function changeEmailHandler(event) {
    const value = event.target.value;
    dispatch({ type: 'EMAIL_CHANGE', payload: value });
  }

  function changePasswordHandler(event) {
    const value = event.target.value;
    dispatch({ type: 'PASSWORD_CHANGE', payload: value });
  }

  function submitFormHandler(event) {
    event.preventDefault();

    if (!formIsValid) {
      alert('Invalid form inputs!');
      return;
    }

    console.log('Good job!');
    console.log(formState.email.value, formState.password.value);
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={changeEmailHandler} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={changePasswordHandler} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
