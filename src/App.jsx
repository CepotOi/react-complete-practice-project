import FormUser from './components/FormUser/FormUser';

const App = () => {
  const addUserHandler = userData => {
    console.log(userData);
  };

  return (
    <>
      <FormUser onAddUser={addUserHandler} />
    </>
  );
};

export default App;