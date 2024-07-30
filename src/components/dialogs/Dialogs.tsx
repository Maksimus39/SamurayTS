import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogDataType, MessagesDataType} from "../../index";



type DialogsProps = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
}
export const Dialogs = (props:DialogsProps) => {


    let dialogsElement = props.dialogs.map((d) => {
        return (
            <DialogItem name={d.name} id={d.id}/>
        )
    })

    let messageElement = props.messages.map((m) => {
        return (
            <Message message={m.message}/>
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

