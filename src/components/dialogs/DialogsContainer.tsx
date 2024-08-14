import React from 'react';
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../StoreContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialogsPage;

                    const addMessageHandler = () => {
                        const message = state.newMessageText;
                        store.dispatch(addNewMessageTextActionCreator(message));
                    }

                    const onMessageChange = (message: string) => {
                        store.dispatch(updateNewMessageTextActionCreator(message))
                    }
                    return <Dialogs store={store}
                                    updateNewMessageBody={onMessageChange}
                                    sendMessage={addMessageHandler}
                                    dialogsPage={state}
                    />
                }}
        </StoreContext.Consumer>
    )
};

