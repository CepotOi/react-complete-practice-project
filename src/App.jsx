import { useState } from 'react';
import FormUser from './components/Users/FormUser/FormUser';
import UserList from './components/Users/UserList/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = userData => {
    setUsers(prevUsers => [userData, ...prevUsers]);
  };

  return (
    <>
      <FormUser onAddUser={addUserHandler} />
      {users.length > 0 && <UserList users={users} />}
    </>
  );
};

export default App;