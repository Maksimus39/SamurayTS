import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {setAuthUserData} from "../redux/reducer/authPageReducer";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, login, email)
                }
            })
    }

    render() {

        return (
            <Header
                isAuth={this.props.isAuth}
                email={this.props.email}
                login={this.props.login}
            />
        )
    }
}

export type MapStateToPropsType = {
    isAuth: boolean
    email:any
    login: any
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
    };
};


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);