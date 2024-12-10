import {
    AddPostActionType, deletePost, DeletePostActionType,
    SetStatusActionType,
    SetUserProfileActionType

} from "./reducer/profilePageReducer";
import {AddNewMessageTextActionType} from "./reducer/dialogsPageReducer";
import {
    FollowActionType,

    SetCurrentPageActionType, SetUsersActionType,
    SetUsersTotalCountActionType, ToggleIsFetchingActionType, ToggleIsFollowingProgressActionType,
    UnfollowActionType
} from "./reducer/usersPageReducer";
import {SetUserDataActionType} from "./reducer/authPageReducer";


export type ProfilePageType = {
    posts: PostDataType[]
    profile: null
    status: string
}
export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
}
export type SidebarPageType = {
    friends: FriendsDataType[]
}
export type UsersPageType = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
}
export type DialogDataType = {
    img: string
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
export type FriendsDataType = {
    id: number
    img: string
    name: string
}
export type UsersDataType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}
type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    large: string
    small: string
}
export type SetUserDataType = {
    userId: null,
    login: null,
    email: null,
    isAuth: boolean
}

export type DispatchType =
    AddPostActionType
    | AddNewMessageTextActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | ToggleIsFollowingProgressActionType
    | SetStatusActionType
    | DeletePostActionType











