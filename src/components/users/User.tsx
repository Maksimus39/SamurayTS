import React from "react";
import {UsersDataType} from "../redux/store";
import {NavLink} from "react-router-dom";
import styles from "./users.module.css";
import userPhoto from "../assets/images/user.png";

type UserProps = {
    user: UsersDataType;
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    followingInProgress: boolean;
}

export const User = ({user, unfollow, follow, followingInProgress}: UserProps) => {

    const unfollowUser = () => {
        unfollow(user.id)
    }

    const followUser = () => {
        follow(user.id)
    }

    return (
        <div key={user.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={user.name}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress} className={styles.button}
                                  onClick={unfollowUser}>Unfollow</button>
                        : <button disabled={followingInProgress} className={styles.button}
                                  onClick={followUser}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{'us.location.country'}</div>
                <div>{'us.location.city'}</div>
            </span>
        </div>
    );
}