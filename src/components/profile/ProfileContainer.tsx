import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getStatus,
    profileThunkCreator,
    savePhoto,
    setUserProfile,
    updateStatus
} from "../redux/reducer/profilePageReducer";
import {ProfilePageType, UsersDataType} from "../redux/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../redux/redux-store";


export type MapStateToProps = {
    profile: ProfilePageType["profile"] | UsersDataType | null;
    status: string
    authorizedUserId: null
    isAuth: boolean
}
export type MapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
    setUserProfile: (profile: null) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
export type DialogsUsersPropsType = MapStateToProps & MapDispatchToProps;

class ProfileContainer extends React.Component<any, DialogsUsersPropsType> {

    refrechProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.profileThunkCreator(userId)

        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refrechProfile()
    }

    componentDidUpdate(prevProps: any, prevState: MapStateToProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refrechProfile()
        }
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    isOwner={!this.props.match.params.userId}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, profileThunkCreator, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

