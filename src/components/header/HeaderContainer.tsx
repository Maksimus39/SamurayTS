import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {logout, setAuthUserData} from "../redux/reducer/authPageReducer";
import {getEmailSelector, getIsAuthSelector, getLoginSelector} from "../redux/functionSelector/headerContainerSelector";

class HeaderContainer extends React.Component<any, MapStateToPropsType> {


    render() {

        return (
            <Header
                isAuth={this.props.isAuth}
                email={this.props.email}
                login={this.props.login}
                logout={this.props.logout}
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
        isAuth: getIsAuthSelector(state),
        email: getEmailSelector(state),
        login: getLoginSelector(state),
    };
};


export default connect(mapStateToProps, {
    setAuthUserData,
    logout
})(HeaderContainer);