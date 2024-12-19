import {DispatchType, UsersDataType, UsersPageType} from "../store";
import {usersApi} from "../../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../../utils/object-helpers/object-helpers";

// Action type
export type FollowActionType = {
    type: 'SAMURAI-NETWORK/USERS/FOLLOW'
    userId: number
}
export type UnfollowActionType = {
    type: 'SAMURAI-NETWORK/USERS/UNFOLLOW'
    userId: number
}
export type SetUsersActionType = {
    type: 'SAMURAI-NETWORK/USERS/SET-USERS'
    users: UsersDataType[]
}
export type SetCurrentPageActionType = {
    type: 'SAMURAI-NETWORK/USERS/SET-CURRENT-PAGE'
    currentPage: number
}
export type SetUsersTotalCountActionType = {
    type: 'SAMURAI-NETWORK/USERS/SET-USERS-COUNT'
    totalUsersCount: number
}
export type ToggleIsFetchingActionType = {
    type: 'SAMURAI-NETWORK/USERS/TOGGLE-IS-FETCHING'
    isFetching: boolean
}
export type ToggleIsFollowingProgressActionType = {
    type: 'SAMURAI-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS'
    followingInProgress: boolean
}

// Action creator
export const followSuccess = (userId: number): FollowActionType => ({
    type: 'SAMURAI-NETWORK/USERS/FOLLOW',
    userId
});
export const unfollowSuccess = (userId: number): UnfollowActionType => ({
    type: 'SAMURAI-NETWORK/USERS/UNFOLLOW',
    userId
});
export const setUsers = (users: UsersDataType[]): SetUsersActionType => ({
    type: 'SAMURAI-NETWORK/USERS/SET-USERS',
    users
});
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: 'SAMURAI-NETWORK/USERS/SET-CURRENT-PAGE',
    currentPage
});
export const setUsersTotalCount = (totalUsersCount: number): SetUsersTotalCountActionType => ({
    type: 'SAMURAI-NETWORK/USERS/SET-USERS-COUNT',
    totalUsersCount
});
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: 'SAMURAI-NETWORK/USERS/TOGGLE-IS-FETCHING',
    isFetching
});
export const toggleIsFollowingProgress = (followingInProgress: boolean): ToggleIsFollowingProgressActionType => ({
    type: 'SAMURAI-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS',
    followingInProgress
});


// Thunk creator
export const getUserThunkCreator = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    const data = await usersApi.getUsers({
        currentPage: currentPage,
        pageSize: pageSize
    })
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotalCount(data.totalCount));
}

// Определите тип для apiMethod
type ApiMethodType = (userId: number) => Promise<{ resultCode: number }>;

// Определите тип для actionCreator
type ActionCreatorType = (userId: number) => FollowActionType | UnfollowActionType;

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: ApiMethodType, actionCreator: ActionCreatorType) => {
    dispatch(toggleIsFollowingProgress(true))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false))
}
export const follow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersApi.followUser.bind(usersApi)
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}
export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersApi.unfollowUser.bind(usersApi)
    await followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
}


const initialState: UsersPageType = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false,
}

export const usersPageReducer = (state: UsersPageType = initialState, action: DispatchType): UsersPageType => {
    switch (action.type) {
        case "SAMURAI-NETWORK/USERS/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            };
        case "SAMURAI-NETWORK/USERS/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        case "SAMURAI-NETWORK/USERS/SET-USERS":
            return {
                ...state, users: action.users
            };
        case "SAMURAI-NETWORK/USERS/SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SAMURAI-NETWORK/USERS/SET-USERS-COUNT":
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case "SAMURAI-NETWORK/USERS/TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "SAMURAI-NETWORK/USERS/TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state, followingInProgress: action.followingInProgress
            }
        default:
            return state;
    }
};