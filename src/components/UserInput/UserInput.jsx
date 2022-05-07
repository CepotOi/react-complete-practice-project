import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './UserInput.module.css';

const UserInput = () => {
  const [userInput, setUserInput] = useState({});

  const submitHandler = event => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles['form-control']}>
          <label htmlFor="user_name">User Name</label>
          <input type="text" id="user_name" />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" />
        </div>
        <div className={styles['form-control__actions']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default UserInput;