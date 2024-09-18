import {DispatchType, PostDataType, ProfilePageType} from "../store";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";

// Action type
export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: null
}
export type SetStatusActionType = {
    type: 'SET-STATUS'
    status: string
}


// Action creator
export const addPost = (newPostText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: null): SetUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setStatus = (status: string): SetStatusActionType => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}


// Thunk creator type
type ProfileThunkCreatorType = AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType

// Thunk creator
export const profileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ProfileThunkCreatorType>) => {
        usersApi.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}
export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileThunkCreatorType>) => {
        usersApi.getStatus(userId).then(response => {
            dispatch(setStatus(response))
        })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileThunkCreatorType>) => {
        usersApi.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
}


let initialState: ProfilePageType = {
    posts: [
        {id: new Date().getTime(), message: 'Hi how are you', likesCount: 15},
        {id: new Date().getTime(), message: 'it`s my first post', likesCount: 20},
    ],
    profile: null,
    status: ''
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: DispatchType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
};

