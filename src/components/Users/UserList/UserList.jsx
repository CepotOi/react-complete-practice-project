import Card from "../../UI/Card/Card";
import UserItem from "../UserItem/UserItem";
import styles from './UserList.module.css';

const UserList = ({ users }) => {
  return (
    <Card>
      <ul className={styles['user-list']}>
        {users.map((user) => (
          <li key={user.id}>
            <UserItem userItem={user} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;