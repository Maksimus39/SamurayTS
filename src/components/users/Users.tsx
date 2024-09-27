import React from "react";
import { UsersDataType } from "../redux/store";
import { Paginator } from "../common/paginator/Paginators";
import { User } from "./User";

type UsersProps = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    users: UsersDataType[];
    unfollow: (userId: number) => void;
    follow: (userId: number) => void;
    followingInProgress: boolean;
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

    return (
        <div>
            <Paginator totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged} />

            <div>
                {users.map(user => (
                    <User
                        key={user.id}
                        user={user}
                        unfollow={unfollow}
                        follow={follow}
                        followingInProgress={followingInProgress}
                    />
                ))}
            </div>
        </div>
    );
}