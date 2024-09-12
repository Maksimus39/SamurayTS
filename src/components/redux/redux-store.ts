import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./reducer/profilePageReducer";
import {dialogsPageReducer} from "./reducer/dialogsPageReducer";
import {sidebarPageReducer} from "./reducer/SidePageReducer";
import {usersPageReducer} from "./reducer/usersPageReducer";
import {authReducer} from "./reducer/authPageReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let reducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
})

export type AppRootStateType = ReturnType<typeof reducer>

export let store: Store<AppRootStateType> = createStore(reducer, applyMiddleware(thunkMiddleware));


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store