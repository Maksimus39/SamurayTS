import {combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {dialogsPageReducer} from "./reducer/dialogsPageReducer";
import {sidebarPageReducer} from "./reducer/SidePageReducer";
import {usersPageReducer} from "./reducer/usersPageReducer";
import {authReducer} from "./reducer/authPageReducer";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

export type AppRootStateType = ReturnType<typeof reducer>

export let store: Store<AppRootStateType> = createStore(reducer);


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store