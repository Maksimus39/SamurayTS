import {AppRootStateType} from "../redux/redux-store";
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../redux/store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (message: string) => void
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(updateNewMessageTextActionCreator(message));
        },
        sendMessage: (message: string) => {
            dispatch(addNewMessageTextActionCreator(message));
        },
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)