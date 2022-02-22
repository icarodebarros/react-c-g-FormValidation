// import { useState } from "react";

import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: changeFirstNameHandler,
    inputBlurHandler: onBlurFirstNameHandler,
    reset: firstNameReset
  } = useInput((value) => value.trim() !== '');

  // const [enteredFirstName, setEnteredFirstName] = useState('');
  // const [firstNameIsTouched, setFirstNameIsTouched] = useState(false);
  
  // const firstNameIsValid = enteredFirstName.trim() !== '';

  // const changeFirstNameHandler = (event) => {
    // setEnteredFirstName(event.target.value);
    // setFirstNameIsTouched(true);
  // }

  // const onBlurFirstNameHandler = (event) => {
  //   setFirstNameIsTouched(true);
  // }

  // const firstNameInputIsValid = !firstNameIsTouched || firstNameIsValid;
  const inputFirstNameClasses = !firstNameHasError ? 'form-control' : 'form-control invalid';

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!firstNameIsValid) return;

    console.log(enteredFirstName)
    // setEnteredFirstName('');
    // setFirstNameIsTouched(false);
    firstNameReset();
  }
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={inputFirstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={changeFirstNameHandler} onBlur={onBlurFirstNameHandler} />
        </div>
        {firstNameHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
