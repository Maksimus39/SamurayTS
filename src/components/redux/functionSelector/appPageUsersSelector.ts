import {AppRootStateType} from "../redux-store";

export const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getPageSizeSelector = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingIsProgressSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}