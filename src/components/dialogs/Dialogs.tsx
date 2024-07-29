import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


type DialogDataType = {
    id: string
    name: string
}

type MessagesDataType = {
    message: string
}
type DialogsProps = {
    dialogsData: DialogDataType[]
    messagesData: MessagesDataType[]
}
export const Dialogs = (props:DialogsProps) => {


    let dialogsElement = props.dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    let messageElement = props.messagesData.map((message) => {
        return (
            <Message message={message.message}/>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {dialogsElement}
            </div>

            <div className={classes.messages}>

                {messageElement}
            </div>
        </div>
    );
};

