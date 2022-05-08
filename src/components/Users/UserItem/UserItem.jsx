const UserItem = ({ userItem }) => {
  const { name, age } = userItem;

  return (
    <span>{`${name} (${age} y/o)`}</span>
  );
};

export default UserItem;