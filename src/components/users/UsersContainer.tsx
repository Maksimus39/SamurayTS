import React from 'react';
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {UsersDataType} from "../redux/store";
import {Preloader} from "../common/preloader/Preloader";
import {
    follow,
    getUserThunkCreator,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollow
} from "../redux/reducer/usersPageReducer";
import {Users} from "./Users";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";

export type MapStateToProps = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean,
}
export type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersDataType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (followingInProgress: boolean) => void
    getUserThunkCreator: (currentPage: number, pageSize: number) => void
}
export type DialogsUsersPropsType = MapStateToProps & MapDispatchToProps;

class UsersContainer extends React.Component<DialogsUsersPropsType, MapStateToProps> {

    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setUsersTotalCount,
        toggleIsFetching,
        toggleIsFollowingProgress,
        getUserThunkCreator,
    })
)(UsersContainer)