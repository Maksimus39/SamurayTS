import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {setAuthThunkCreator, setAuthUserData} from "../redux/reducer/authPageReducer";

class HeaderContainer extends React.Component<any, MapStateToPropsType> {

    componentDidMount() {
        this.props.setAuthThunkCreator()
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
    email: any
    login: any
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        email: state.auth.email,
        login: state.auth.login,
    };
};


export default connect(mapStateToProps, {
    setAuthUserData,
    setAuthThunkCreator
})(HeaderContainer);