import {combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {dialogsPageReducer} from "./reducer/dialogsPageReducer";
import {sidebarPageReducer} from "./reducer/SidePageReducer";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
})

export type AppRootStateType = ReturnType<typeof reducer>

export let store: Store<AppRootStateType> = createStore(reducer);