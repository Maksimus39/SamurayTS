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
import {compose} from "redux";
import {
    getCurrentPageSelector,
    getFollowingIsProgressSelector,
    getIsFetchingSelector, getPage, getTotalUsersCount,
    getUsers,
} from "../redux/functionSelector/appPageUsersSelector";

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
        const {currentPage, pageSize} = this.props
        this.props.getUserThunkCreator(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUserThunkCreator(pageNumber, pageSize);
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


const mapStateToProps = (state: AppRootStateType): MapStateToProps => {
    return {
        users: getUsers(state),
        pageSize: getPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingIsProgressSelector(state),
    }
}

export default compose<React.ComponentType>(
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