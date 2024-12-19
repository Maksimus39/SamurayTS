import styles from "./users.module.css";
import React from "react";
import {UsersDataType} from "../redux/store";
import {Paginator} from "../common/paginator/Paginator";
import User from './User';

type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersDataType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
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
                          followingInProgress,
                      }: UsersProps) => {

    return <div>

        <Paginator totalItemsCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>

        <div className={styles.usersList}>
            {users.map(us => (
                <User key={us.id}
                      user={us}
                      unfollow={unfollow}
                      follow={follow}
                      followingInProgress={followingInProgress}/>
            ))}
        </div>
    </div>
}