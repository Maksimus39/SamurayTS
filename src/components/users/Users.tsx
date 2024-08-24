import React from "react";
import styles from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import axios from "axios";
import {DialogsUsersPropsType, MapStateToProps} from "./UsersContainer";

export class Users extends React.Component<DialogsUsersPropsType, MapStateToProps> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div>
                <div>

                    {pages.map((p) => (
                        <span key={p} className={this.props.currentPage === p ? styles.selectedPage : ''}
                              onClick={() => {
                                  this.onPageChanged(p)
                              }}>
                            {p}
                        </span>
                    ))}

                </div>
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
            </div>

        );
    }
}