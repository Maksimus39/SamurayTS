import {AppRootStateType} from "../redux-store";

export const getInitializedSelector = (state: AppRootStateType) => {
    return state.app.Initialized
}