import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {UsersDataType} from "../redux/store";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator, setUsersTotalCountActionCreator,
    unfollowActionCreator
} from "../redux/reducer/usersPageReducer";
import {Users} from "./Users";


export type MapStateToProps = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type DialogsUsersPropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users: UsersDataType[]) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setUsersTotalCountActionCreator(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
