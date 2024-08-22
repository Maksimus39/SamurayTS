import React from "react";
import styles from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import axios from "axios";
import {DialogsUsersPropsType, MapStateToProps} from "./UsersContainer";

export class UsersC extends React.Component<DialogsUsersPropsType, MapStateToProps> {

    constructor(props: DialogsUsersPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)
        })
    }


    render() {
        return (
            <div>
                {this.props.users.map(us => (
                    <div key={us.id}>
                    <span>
                        <div>
                            <img src={us.photos.small != null ? us.photos.small : userPhoto} alt={us.name}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {us.followed ? (
                                <button className={styles.button}
                                        onClick={() => this.props.unfollow(us.id)}>Unfollow</button>
                            ) : (
                                <button className={styles.button}
                                        onClick={() => this.props.follow(us.id)}>Follow</button>
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
    }
}