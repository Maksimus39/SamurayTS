import {combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {dialogsPageReducer} from "./reducer/dialogsPageReducer";
import {sidebarPageReducer} from "./reducer/SidePageReducer";
import {usersPageReducer} from "./reducer/usersPageReducer";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersPageReducer
})

export type AppRootStateType = ReturnType<typeof reducer>

export let store: Store<AppRootStateType> = createStore(reducer);