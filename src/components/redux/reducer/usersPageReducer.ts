import {DispatchType, UsersDataType, UsersPageType} from "../store";

export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}
export type SerUsersActionType = {
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

export const followActionCreator = (userId: number): FollowActionType => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowActionCreator = (userId: number): UnfollowActionType => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsersActionCreator = (users: UsersDataType[]): SerUsersActionType => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setCurrentPageActionCreator = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}
export const setUsersTotalCountActionCreator = (totalUsersCount: number): SetUsersTotalCountActionType => {
    return {
        type: 'SET-USERS-COUNT',
        totalUsersCount: totalUsersCount
    } as const
}
export const toggleIsFetchingActionCreator = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
        default:
            return state;
    }
};

