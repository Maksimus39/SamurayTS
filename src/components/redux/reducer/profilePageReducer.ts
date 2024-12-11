import {DispatchType, PostDataType, ProfilePageType} from "../store";
import {Dispatch} from "redux";
import {usersApi} from "../../api/api";

// Action type
export type AddPostActionType = {
    type: 'SAMURAI-NETWORK/PROFILE/ADD-POST'
    newPostText: string
}
export type SetUserProfileActionType = {
    type: 'SAMURAI-NETWORK/PROFILE/SET-USER-PROFILE'
    profile: null
}
export type SetStatusActionType = {
    type: 'SAMURAI-NETWORK/PROFILE/SET-STATUS'
    status: string
}
export type DeletePostActionType = {
    type: 'SAMURAI-NETWORK/PROFILE/DELETE-POST'
    postId: number
}


// Action creator
export const addPost = (newPostText: string): AddPostActionType => {
    return {
        type: 'SAMURAI-NETWORK/PROFILE/ADD-POST',
        newPostText: newPostText
    } as const
}
export const setUserProfile = (profile: null): SetUserProfileActionType => {
    return {
        type: 'SAMURAI-NETWORK/PROFILE/SET-USER-PROFILE',
        profile: profile
    } as const
}
export const setStatus = (status: string): SetStatusActionType => {
    return {
        type: 'SAMURAI-NETWORK/PROFILE/SET-STATUS',
        status: status
    } as const
}
export const deletePost = (postId: number): DeletePostActionType => {
    return {
        type: 'SAMURAI-NETWORK/PROFILE/DELETE-POST',
        postId: postId
    } as const
}


// Thunk creator type
type ProfileThunkCreatorType = AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType

// Thunk creator
export const profileThunkCreator = (userId: number) => async (dispatch: Dispatch<ProfileThunkCreatorType>) => {
    let data = await usersApi.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number) => async (dispatch: Dispatch<ProfileThunkCreatorType>) => {
    await usersApi.getStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ProfileThunkCreatorType>) => {
    const response = await usersApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
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
        case 'SAMURAI-NETWORK/PROFILE/ADD-POST':
            let newPost: PostDataType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case "SAMURAI-NETWORK/PROFILE/SET-USER-PROFILE":
            return {
                ...state, profile: action.profile
            }
        case "SAMURAI-NETWORK/PROFILE/SET-STATUS":
            return {
                ...state, status: action.status
            }
        case "SAMURAI-NETWORK/PROFILE/DELETE-POST":
            return {
                ...state, posts: state.posts.filter(post => post.id !== action.postId),
            }
        default:
            return state
    }
};

