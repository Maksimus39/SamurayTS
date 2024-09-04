import {DispatchType, SetUserDataType} from "../store";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";

// ActionType
export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        userId: null,
        login: null,
        email: null
    }
}

// AC
export const setAuthUserData = (id: null, login: null, email: null): SetUserDataActionType => {
    return {
        type: 'SET-USER-DATA',
        data: {
            userId: id,
            login: login,
            email: email
        }
    } as const
}
// Thunk creator type
type AuthThunkCreatorType = SetUserDataActionType

// Thunk creator
export const setAuthThunkCreator = () => {
    return (dispatch: Dispatch<AuthThunkCreatorType>) => {
        usersApi.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email));
            }
        });
    };
};


const initialState: SetUserDataType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: SetUserDataType = initialState, action: DispatchType): SetUserDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state
    }
}