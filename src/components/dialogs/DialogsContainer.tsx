import {AppRootStateType} from "../redux/redux-store";
import {addNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import React from "react";
import {getDialogsPageSelector} from "../redux/functionSelector/dialogsPageSelector";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageText: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: getDialogsPageSelector(state),
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageText: string) => {
            dispatch(addNewMessageTextActionCreator(newMessageText));
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)