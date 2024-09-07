import {AppRootStateType} from "../redux/redux-store";
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {DialogsPageType} from "../redux/store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (message: string) => void
    sendMessage: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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


let AuthRedirectComponent = withAuthRedirect(Dialogs)



export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);