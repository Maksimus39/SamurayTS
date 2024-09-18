import {DispatchType, SetUserDataType} from "../store";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";
import {stopSubmit} from "redux-form";

// ActionType
export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    payload: {
        userId: null,
        login: null,
        email: null,
        isAuth: boolean,
    }
}

// AC
export const setAuthUserData = (id: null, login: null, email: null, isAuth: boolean,): SetUserDataActionType => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userId: id,
            login: login,
            email: email,
            isAuth: isAuth
        }
    } as const
}
// Thunk creator type
type ThunkCreatorType = SetUserDataActionType


// Thunk creator
export const setAuthThunkCreator = () => {
    return (dispatch: Dispatch<ThunkCreatorType>) => {
        usersApi.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    };
};

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch<any>) => {
        usersApi.login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthThunkCreator())
                } else {

                    let message = response.messages.length > 0 ? response.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    };
};

export const logout = () => {
    return (dispatch: Dispatch<ThunkCreatorType>) => {
        usersApi.logout()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
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
                ...state, ...action.payload
            }
        default:
            return state
    }
}

