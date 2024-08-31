import {DispatchType, SetUserDataType} from "../store";

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