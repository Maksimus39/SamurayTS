import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {profileThunkCreator, setUserProfile} from "../redux/reducer/profilePageReducer";
import {AppRootStateType} from "../redux/redux-store";
import {ProfilePageType, UsersDataType} from "../redux/store";
import {Redirect, withRouter} from "react-router-dom";

export type MapStateToProps = {
    profile: ProfilePageType["profile"] | UsersDataType | null;
    isAuth: boolean
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
        // usersApi.getProfile(userId).then(data=>{
        //     this.props.setUserProfile(data)
        // })
    }

    render() {

        if (this.props.isAuth === false) return <Redirect to={'/login'}/>;
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
    isAuth: state.auth.isAuth
});


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile,
    profileThunkCreator
})(WithUrlDataContainerComponent);