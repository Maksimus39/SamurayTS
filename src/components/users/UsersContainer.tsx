import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {UsersDataType} from "../redux/store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    follow,
    getUserThunkCreator,
    setCurrentPage,
    toggleIsFollowingProgress,
    unfollow
} from "../redux/reducer/usersPageReducer";

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

        // this.props.toggleIsFetching(true)
        //
        // usersApi.getUsers({
        //     currentPage: this.props.currentPage,
        //     pageSize: this.props.pageSize
        // }).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        // });
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUserThunkCreator(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // usersApi.getUsers(
        //     {
        //         currentPage: pageNumber,
        //         pageSize: this.props.pageSize
        //     })
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items);
        //     })
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
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    // setUsers,
    setCurrentPage,
    // setUsersTotalCount,
    // toggleIsFetching,
    toggleIsFollowingProgress,
    getUserThunkCreator,
})(UsersContainer)
