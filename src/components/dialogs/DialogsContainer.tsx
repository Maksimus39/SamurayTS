import {AppRootStateType} from "../redux/redux-store";
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";

let mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (message: string) => {
            dispatch(addNewMessageTextActionCreator(message));
        },
        sendMessage: (message: string) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
