import React from 'react';

import styles from '../style/UsersList.css';

const UsersList = (props) => {
    const userList = props.users.map((user) => {
        return (
            <li key={user.id} className={styles.UserItem}>
                {user.name}
            </li>
        );
    });
    return (
        <div className={styles.Users}>
            <div className={styles.UsersOnline}>
                {props.users.length} people online
            </div>
            <ul className={styles.UsersList}>
            {userList}
            </ul>
        </div>
    );   
};

export default UsersList;