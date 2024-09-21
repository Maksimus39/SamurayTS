import {DispatchType, InitialDataType} from "../store";
import {Dispatch} from "redux";
import {setAuthThunkCreator} from "./authPageReducer";

// ActionType
export type InitializingSuccessDataActionType = {
    type: 'INITIALIZING-SUCCESS'
}

// AC
export const initializedSuccess = (): InitializingSuccessDataActionType => {
    return {
        type: 'INITIALIZING-SUCCESS',
    }
}


// Thunk creator type
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(setAuthThunkCreator())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


export const initialState: InitialDataType = {
    Initialized: false,
}

const appReducer = (state: InitialDataType = initialState, action: DispatchType): InitialDataType => {
    switch (action.type) {
        case 'INITIALIZING-SUCCESS':
            return {
                ...state, Initialized: true
            }
        default:
            return state
    }
}

export default appReducer;

