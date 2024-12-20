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
export type SavePhotoSuccessActionType = {
    type: 'SAMURAI-NETWORK/PROFILE/SAVE-PHOTOS'
    photos: any
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
export const savePhotoSuccess = (photos: string): SavePhotoSuccessActionType => {
    return {
        type: 'SAMURAI-NETWORK/PROFILE/SAVE-PHOTOS',
        photos: photos
    } as const
}


// Thunk creator type
type ProfileThunkCreatorType = AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | SavePhotoSuccessActionType

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
export const savePhoto = (file: string) => async (dispatch: Dispatch<ProfileThunkCreatorType>) => {
    const response = await usersApi.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


const initialState: ProfilePageType = {
    posts: [
        {id: new Date().getTime(), message: 'Hi how are you', likesCount: 15},
        {id: new Date().getTime(), message: 'it`s my first post', likesCount: 20},
    ],
    profile: null,
    status: '',
    photos: ''
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
        case "SAMURAI-NETWORK/PROFILE/SAVE-PHOTOS":
            debugger
            return {
                ...state,profile: state.profile, photos: action.photos
            }
        default:
            return state
    }
};

