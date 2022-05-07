import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './FormUser.module.css';

const FormUser = props => {
  const INITIAL_STATE = {
    name: '',
    age: ''
  };

  const [user, setUser] = useState(INITIAL_STATE);

  const resetState = () => {
    setUser(INITIAL_STATE);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    const userInput = {
      name: user.name,
      age: parseInt(user.age)
    };

    props.onAddUser(userInput);
    return resetState();
  };

  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <div className={styles['form-control']}>
          <label htmlFor="__name">User Name</label>
          <input type="text" id="__name" name="name" value={user.name} onChange={handleInputChange} />
        </div>
        <div className={styles['form-control']}>
          <label htmlFor="__age">Age (Years)</label>
          <input type="number" id="__age" name="age" value={user.age} onChange={handleInputChange} />
        </div>
        <div className={styles['form-control__actions']}>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default FormUser;