import { useReducer } from 'react';

import classes from './Form.module.css';

const initialFormState = {
  email: {
    value: '',
    isValid: null,
  },
  password: {
    value: '',
    isValid: null,
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

  function handleChangeEmail(event) {
    const value = event.target.value;
    dispatch({ type: 'EMAIL_CHANGE', payload: value });
  }

  function handleChangePassword(event) {
    const value = event.target.value;
    dispatch({ type: 'PASSWORD_CHANGE', payload: value });
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    if (formState.email.isValid && formState.password.isValid) {
      console.log('Good job!');
      console.log(formState.email.value, formState.password.value);
    } else if (formState.email.isValid === null || formState.password.isValid === null) {
      alert('Looks like you forgot to fill in the form!');
    } else {
      alert('Invalid input. Please check your email and password (min. 7 characters).');
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" onChange={handleChangeEmail} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={handleChangePassword} />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form;
