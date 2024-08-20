import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import {UsersDataType} from "../redux/store";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../redux/reducer/usersPageReducer";


type MapStateToProps = {
    users: UsersDataType[]
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
}
export type DialogsUsersPropsType = MapStateToProps & MapDispatchToProps;

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
