import {AppRootStateType} from "../redux-store";

export const getIsAuthSelector = (state: AppRootStateType) => {
    return state.auth.isAuth
}

export const getEmailSelector = (state: AppRootStateType) => {
    return state.auth.email
}

export const getLoginSelector = (state: AppRootStateType) => {
    return state.auth.email
}