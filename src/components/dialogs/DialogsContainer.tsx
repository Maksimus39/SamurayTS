import React from 'react';
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {Store} from "redux";
import {AppRootStateType} from "../redux/redux-store";
import {Dialogs} from "./Dialogs";


type DialogsProps = {
    store: Store<AppRootStateType>
}
export const DialogsContainer = (props: DialogsProps) => {

    let state = props.store.getState().dialogsPage;

    const addMessageHandler = () => {
        const message = state.newMessageText;
        props.store.dispatch(addNewMessageTextActionCreator(message));
    }

    const onMessageChange = (message: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message))
    }

    return (
        <div>
            <Dialogs store={props.store}
                     updateNewMessageBody={onMessageChange}
                     sendMessage={addMessageHandler}
                     dialogsPage={state}
            />
        </div>

    );
};

