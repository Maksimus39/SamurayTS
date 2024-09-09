import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../redux/reducer/profilePageReducer";
import {ProfilePageType, UsersDataType} from "../redux/store";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import {compose} from "redux";
import {AppRootStateType} from "../redux/redux-store";


export type MapStateToProps = {
    profile: ProfilePageType["profile"] | UsersDataType | null;
}
export type MapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
    setUserProfile: (profile: null) => void
}
export type DialogsUsersPropsType = MapStateToProps & MapDispatchToProps;

class ProfileContainer extends React.Component<any, DialogsUsersPropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.profileThunkCreator(userId)
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToProps => ({
    profile: state.profilePage.profile,
});

export default compose<React.ComponentType>(
    connect(mapStateToProps, { setUserProfile, profileThunkCreator }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

