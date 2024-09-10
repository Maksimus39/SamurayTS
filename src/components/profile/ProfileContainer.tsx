import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileThunkCreator, setUserProfile, updateStatus} from "../redux/reducer/profilePageReducer";
import {ProfilePageType, UsersDataType} from "../redux/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../redux/redux-store";


export type MapStateToProps = {
    profile: ProfilePageType["profile"] | UsersDataType | null;
    status: string
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

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 31374
        }
        this.props.profileThunkCreator(userId)

        this.props.getStatus(userId)
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, profileThunkCreator, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

