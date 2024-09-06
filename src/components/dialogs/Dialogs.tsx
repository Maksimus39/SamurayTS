import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    });

    let messageElement = state.messages.map((m) => {
        return (
            <Message key={m.id} message={m.message}/>
        )
    });

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessageHandler = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.sendMessage(message);
            newMessageElement.current.value = ''; // Clear the textarea after sending the message
        }
    }

    const onNewMessageChange = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.updateNewMessageBody(message);
        }
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
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
                              value={state.newMessageText}
                              placeholder={'Enter a message...'}/>
                </div>
                <div>
                    <button onClick={addMessageHandler}>Add Message</button>
                </div>
            </div>
        </div>
    );
};