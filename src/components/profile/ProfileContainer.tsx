import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../redux/reducer/profilePageReducer";
import {AppRootStateType} from "../redux/redux-store";
import {ProfilePageType, UsersDataType} from "../redux/store";

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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                if (this.props.setUserProfile) {
                    this.props.setUserProfile(response.data);
                }
            })
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);