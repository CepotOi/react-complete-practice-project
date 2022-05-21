import { useState, useRef } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import Modal from '../../UI/Modal/Modal';
import styles from './FormUser.module.css';

const FormUser = props => {
  // const INITIAL_STATE = {
  //   id: '',
  //   name: '',
  //   age: ''
  // };

  // const [addUser, setAddUser] = useState(INITIAL_STATE);
  const inputRef = useRef({});
  const [error, setError] = useState(null);

  const resetInput = () => {
    //* using state
    // setAddUser(INITIAL_STATE);

    //* using ref
    inputRef.current.name.value = '';
    inputRef.current.age.value = '';
  };

  // const handleInputChange = event => {
  //   const { name, value } = event.target;
  //   setAddUser(prevState => ({
  //     ...prevState,
  //     [name]: value.trim()
  //   }));
  // };

  const formSubmitHandler = event => {
    event.preventDefault();

    //* using state
    // const userName = addUser.name;
    // const userAge = addUser.age;

    //* using ref
    const userName = inputRef.current.name.value;
    const userAge = inputRef.current.age.value;

    if (userName.trim().length === 0 || userAge === '') {
      setError({ title: 'Invalid Input', message: 'Please fill out all fields' });
      return;
    }

    if (userAge < 1) {
      setError({ title: 'Invalid Input', message: 'Age must be greater than 0' });
      return;
    }

    const userInput = {
      id: Math.round((Math.random() * 100) + Date.now()).toString(),
      name: userName,
      age: parseInt(userAge)
    };

    props.onAddUser(userInput);
    return resetInput();
  };

  return (
    <>
      {error && (
        <Modal onCloseModal={() => setError(null)} message={error.message} title={error.title} />
      )}

      <Card>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['form-control']}>
            <label htmlFor="__user_name">User Name</label>
            <input
              type="text"
              id="__user_name"
              name="name"
              // value={addUser.name}
              // onChange={handleInputChange}
              ref={ref => inputRef.current['name'] = ref}
            />
          </div>
          <div className={styles['form-control']}>
            <label htmlFor="__user_age">Age (Years)</label>
            <input
              type="number"
              id="__user_age"
              name="age"
              // value={addUser.age}
              // onChange={handleInputChange}
              ref={ref => inputRef.current['age'] = ref}
            />
          </div>
          <div className={styles['form-control__actions']}>
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default FormUser;