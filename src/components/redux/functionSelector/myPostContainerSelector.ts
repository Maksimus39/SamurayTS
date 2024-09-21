import {AppRootStateType} from "../redux-store";

export const getPostsSelector = (state: AppRootStateType) => {
    return state.profilePage.posts
}