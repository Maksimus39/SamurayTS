import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './users.module.css';
import {UsersDataType} from "../redux/store";
 import userPhoto from "../assets/images/user.png";

type UserProps = {
    user: UsersDataType;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    followingInProgress: boolean;
};

const User: React.FC<UserProps> = ({ user, unfollow, follow, followingInProgress }) => {
    return (
        <div key={user.id} className={styles.userContainer}>
            <div className={styles.userImageContainer}>
                <NavLink to={'/profile/' + user.id}>
                                                    <img src={user.photos.small != null
                                                         ? user.photos.small
                                                         : userPhoto} alt={user.name}
                                                        className={styles.userPhoto}/>
                                               </NavLink>
            </div>
            <div className={styles.userButtons}>
                {user.followed
                    ? <button disabled={followingInProgress} className={styles.button} onClick={() => unfollow(user.id)}>Unfollow</button>
                    : <button disabled={followingInProgress} className={styles.button} onClick={() => follow(user.id)}>Follow</button>}
            </div>
            <div className={styles.userInfo}>
                <div>{user.name}</div>
                <div>{user.status}</div>
                <div>{user.location?.country || ''}</div>
                <div>{user.location?.city || ''}</div>
            </div>
        </div>
    );
};

export default User;



