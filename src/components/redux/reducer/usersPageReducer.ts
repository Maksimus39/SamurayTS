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

const initialState: UsersPageType = {
    users: []
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
                ...state,
                users: [...state.users, ...action.users]
            };
        default:
            return state;
    }
};

