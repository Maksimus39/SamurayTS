import {DispatchType, UsersDataType, UsersPageType} from "../store";
import {usersApi} from "../../api/api";
import {Dispatch} from "redux";

// Action type
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

// Action creator
export const followSuccess = (userId: number): FollowActionType => ({
    type: 'FOLLOW',
    userId
});
export const unfollowSuccess = (userId: number): UnfollowActionType => ({
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

// Thunk creator type
type getUserThunkCreatorType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleIsFollowingProgressActionType

// Thunk creator
export const getUserThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<getUserThunkCreatorType>) => {
        dispatch(toggleIsFetching(true))

        usersApi.getUsers({
            currentPage: currentPage,
            pageSize: pageSize
        }).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch<getUserThunkCreatorType>) => {
        dispatch(toggleIsFollowingProgress(true))
        usersApi.followUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false))
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<getUserThunkCreatorType>) => {
        dispatch(toggleIsFollowingProgress(true))
        usersApi.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false))
        })
    }
}

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
                    u.id === action.userId ? {...u, followed: true} : u
                )
            };
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userId ? {...u, followed: false} : u
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