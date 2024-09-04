import {DispatchType, PostDataType, ProfilePageType} from "../store";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";

// Action type
export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: null
}

// Action creator
export const addPost = (newPostText: string): AddPostActionType => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const updateNewPostText = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (profile: null): SetUserProfileActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}

// Thunk creator type
type ProfileThunkCreatorType = AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileActionType

// Thunk creator
export const profileThunkCreator = (userId: number) => {
    return (dispatch: Dispatch<ProfileThunkCreatorType>) => {
        usersApi.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

let initialState: ProfilePageType = {
    posts: [
        {id: new Date().getTime(), message: 'Hi how are you', likesCount: 15},
        {id: new Date().getTime(), message: 'it`s my first post', likesCount: 20},
    ],
    newPostText: '',
    profile: null
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: DispatchType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
};

