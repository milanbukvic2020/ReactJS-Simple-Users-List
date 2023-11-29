import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Netacan unos',
        message: 'Unesite ime i prezime',
      });
      return;
    }

    if (enteredAge < 1) {
      setError({
        title: 'Neisparavan unos',
        message: 'Unesite ispravan broj godina (> 0)',
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };
  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
  //     setError({
  //       title: 'Netacan unos',
  //       message: 'Unesite ime i prezime',
  //     });
  //     return;
  //   }
  //   if (+enteredAge < 1) {
  //     setError({
  //       title: 'Neispravan unos',
  //       message: 'Unesite ispravan broj godina (> 0).',
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredUsername, enteredAge);
  //   setEnteredUsername('');
  //   setEnteredAge('');
  // };

  //

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  // const errorHandler = () => {
  //   setError(null);
  // };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {/* {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )} */}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Korisnikovo ime</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Godine</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Dodajte novog korisnika</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
