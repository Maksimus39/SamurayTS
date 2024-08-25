import {AddPostActionType, UpdateNewPostTextActionType} from "./reducer/profilePageReducer";
import {AddNewMessageTextActionType, UpdateNewMessageTextActionType} from "./reducer/dialogsPageReducer";
import {
    FollowActionType,
    SerUsersActionType,
    SetCurrentPageActionType,
    SetUsersTotalCountActionType, ToggleIsFetchingActionType,
    UnfollowActionType
} from "./reducer/usersPageReducer";


// type data
type StoreType = {
    _state: RootStateType,
    getState: () => RootStateType,
    _callSubscriber: () => void,
    subscribe: (observer: () => void) => void;
    dispatch: (action: DispatchType) => void
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebarPage: SidebarPageType
    // users: UsersPageType
}
export type ProfilePageType = {
    posts: PostDataType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
    newMessageText: string
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
    large: null
    small: null
}


export type DispatchType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddNewMessageTextActionType
    | UpdateNewMessageTextActionType
    | FollowActionType
    | UnfollowActionType
    | SerUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType


