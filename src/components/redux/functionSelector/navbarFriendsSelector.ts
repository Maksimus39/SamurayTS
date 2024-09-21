import {AppRootStateType} from "../redux-store";

export const getFriendsSelector = (state: AppRootStateType) => {
    return state.sidebarPage.friends
}