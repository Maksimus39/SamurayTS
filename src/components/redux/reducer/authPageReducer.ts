// ActionType
import {DispatchType, SetUserDataType} from "../store";

export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        id: null,
        login: null,
        email: null
    }
}

// AC
export const setUserData = (id: null, login: null, email: null): SetUserDataActionType => {
    return {
        type: 'SET-USER-DATA',
        data: {
            id: id,
            login: login,
            email: email
        }
    } as const
}


const initialState: SetUserDataType = {
    id: null,
    login: null,
    email: null,
    //isFetching: false,
}

export const authReducer = (state: SetUserDataType = initialState, action: DispatchType): SetUserDataType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state, ...action.data
            }
        default:
            return state
    }

}