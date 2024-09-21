import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {getIsAuthSelector} from "../redux/functionSelector/headerContainerSelector";


type MapStatePropsType = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: getIsAuthSelector(state)
});

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component  {...restProps as T}/>;
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}