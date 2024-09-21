import {AppRootStateType} from "../redux-store";

export const getDialogsPageSelector = (state: AppRootStateType) => {
    return state.dialogsPage
}