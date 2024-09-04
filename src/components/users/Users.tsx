import styles from "./users.module.css";
import userPhoto from "../assets/images/user.png";
import React from "react";
import {UsersDataType} from "../redux/store";
import {NavLink} from "react-router-dom";

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersDataType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    // toggleIsFollowingProgress: (followingInProgress: boolean) => void
    followingInProgress: boolean
}

export const Users = ({
                          totalUsersCount,
                          pageSize,
                          currentPage,
                          onPageChanged,
                          users,
                          unfollow,
                          follow,
                          // toggleIsFollowingProgress,
                          followingInProgress,
                      }: UsersProps) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p) => (
                <span key={p} className={currentPage === p ? styles.selectedPage : ''}
                      onClick={() => {
                          onPageChanged(p)
                      }}>
                    {p}
                </span>
            ))}
        </div>
        <div>
            {users.map(us => (
                <div key={us.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + us.id}>
                                <img src={us.photos.small != null
                                    ? us.photos.small
                                    : userPhoto} alt={us.name}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {us.followed
                                ? <button disabled={followingInProgress}
                                          className={styles.button}
                                          onClick={() => {
                                              unfollow(us.id)
                                          }}>Unfollow</button>
                                // toggleIsFollowingProgress(true)
                                // usersApi.unfollowUser(us.id).then(data => {
                                //     if (data.resultCode === 0) {
                                //         unfollow(us.id)
                                //     }
                                //     toggleIsFollowingProgress(false)
                                // })

                                : <button disabled={followingInProgress}
                                          className={styles.button}
                                          onClick={() => {
                                              follow(us.id)
                                          }}>Follow</button>

                                // toggleIsFollowingProgress(true)
                                // usersApi.followUser(us.id).then(data => {
                                //     if (data.resultCode === 0) {
                                //         follow(us.id)
                                //     }
                                //     toggleIsFollowingProgress(false)
                                // })
                            }
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
}