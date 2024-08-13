import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {Store} from "redux";
import {AppRootStateType} from "../redux/redux-store";
import {DialogsPageType} from "../redux/store";


type DialogsProps = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody: (message: string) => void
    store: Store<AppRootStateType>
}
export const Dialogs = (props: DialogsProps) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    })

    let messageElement = state.messages.map((m) => {
        return (
            <Message key={m.id} message={m.message}/>
        )
    })

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessageHandler = () => {
        props.sendMessage()
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.updateNewMessageBody(message)
        }
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>

                    {dialogsElement}
                </div>

                <div className={classes.messages}>

                    {messageElement}
                </div>

                <div>
                    <div>
                        <textarea ref={newMessageElement} onChange={onNewMessageChange}
                                  value={props.store.getState().dialogsPage.newMessageText}
                                  placeholder={'Enter a message...'}/>
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

