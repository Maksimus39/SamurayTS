import {AppRootStateType} from "../redux-store";
import {createSelector} from "reselect";

// библиотека reselect ----------------------------------------------------------------------------
const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
})

// -------------------------------------------------------------------------------------------------
const getPageSizeSelector = (state: AppRootStateType) => {
    return state.usersPage.pageSize
}
export const getPage = createSelector(getPageSizeSelector, (pageSize) => {
    return pageSize
})
// ------------------------------------------------------------------------------------------------

const getTotalUsersCountSelector = (state: AppRootStateType) => {
    return state.usersPage.totalUsersCount
}
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalUsersCount) => {
    return totalUsersCount
})
// ------------------------------------------------------------------------------------------------
export const getCurrentPageSelector = (state: AppRootStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingIsProgressSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}