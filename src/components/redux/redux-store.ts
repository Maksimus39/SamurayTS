import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
