// usersPageReducer.ts
import { DispatchType, UsersDataType, UsersPageType } from "../store";

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersDataType[]
}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetUsersTotalCountActionType = {
    type: 'SET-USERS-COUNT'
    totalUsersCount: number
}
export type ToggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
export type ToggleIsFollowingProgressActionType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    followingInProgress: boolean
}

export const follow = (userId: number): FollowActionType => ({
    type: 'FOLLOW',
    userId
});
export const unfollow = (userId: number): UnfollowActionType => ({
    type: 'UNFOLLOW',
    userId
});
export const setUsers = (users: UsersDataType[]): SetUsersActionType => ({
    type: 'SET-USERS',
    users
});
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: 'SET-CURRENT-PAGE',
    currentPage
});
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({
    type: 'SET-USERS-COUNT',
    totalUsersCount
});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
});
export const toggleIsFollowingProgress = (followingInProgress: boolean): ToggleIsFollowingProgressActionType => ({
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
    followingInProgress
});

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
}

export const usersPageReducer = (state: UsersPageType = initialState, action: DispatchType): UsersPageType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? { ...u, followed: true } : u
                )
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? { ...u, followed: false } : u
                )
            };
        case "SET-USERS":
            return {
                ...state, users: action.users
            };
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.followingInProgress
            }
        default:
            return state;
    }
};
