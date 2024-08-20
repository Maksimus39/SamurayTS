import React from 'react';
import {DialogsUsersPropsType} from "./UsersContainer";
import styles from './users.module.css'





export const Users = (props: DialogsUsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=ab56a951016b99aca377c31d9fd4b225bb0bb995-2034895-images-thumbs&n=13',
                followed: true,
                fullName: 'Dima',
                status: 'Colleague',
                location: {city: 'Lipetsk', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=87312e7c8e5ace2828a8d9f2b56df9ced76434ba-5480389-images-thumbs&n=13',
                followed: false,
                fullName: 'Sergei',
                status: 'Colleague',
                location: {city: 'Voronezh', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=e8792a06e68efd2d6d6f1bf12f96f4c4b0806be1-5289481-images-thumbs&n=13',
                followed: false,
                fullName: 'Nikolay',
                status: 'Colleague',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=eca1d89f7c883c28cecd0c63a1e0e3c611632feb-4824334-images-thumbs&n=13',
                followed: false,
                fullName: 'Irina',
                status: 'Colleague',
                location: {city: 'Dirt', country: 'Russia'}
            },
            {
                id: 4,
                photoUrl: 'https://avatars.mds.yandex.net/i?id=d6275de8fe985e8f6e67a465ffd058f4d418cf35-5281399-images-thumbs&n=13',
                followed: false,
                fullName: 'Svetlana',
                status: 'Colleague',
                location: {city: 'Yelets', country: 'Russia'}
            }
        ]);
    }

    return (
        <div>
            {props.users.map(us => (
                <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photoUrl} alt={us.fullName} className={styles.userPhoto}/>
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
                        <div>{us.fullName}</div>
                        <div>{us.status}</div>
                    </span>
                    <span>
                        <div>{us.location.country}</div>
                        <div>{us.location.city}</div>
                    </span>
                </div>
            ))}
        </div>
    );
};