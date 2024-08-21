import React from 'react';
import {DialogsUsersPropsType} from "./UsersContainer";
import styles from './users.module.css'
import userPhoto from '../assets/images/user.png'
import axios from "axios";


export let Users = (props: DialogsUsersPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            props.setUsers(res.data.items)
        })
    }

    return (
        <div>
            {props.users.map(us => (
                <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photos.small != null ? us.photos.small : userPhoto} alt={us.name}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {us.followed ? (
                                <button className={styles.button}
                                        onClick={() => props.unfollow(us.id)}>Unfollow</button>
                            ) : (
                                <button className={styles.button} onClick={() => props.follow(us.id)}>Follow</button>
                            )}
                        </div>
                    </span>
                    <span>
                        <div>{us.name}</div>
                        <div>{us.status}</div>
                    </span>
                    <span>
                        <div>{'us.location.country'}</div>
                        <div>{'us.location.city'}</div>
                    </span>
                </div>
            ))}
        </div>
    );
};