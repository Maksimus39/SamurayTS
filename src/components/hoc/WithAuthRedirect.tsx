import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component  {...restProps as T}/>;
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}