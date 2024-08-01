import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogDataType, MessagesDataType} from "../redux/state";


type DialogsProps = {
    dialogs: DialogDataType[]
    messages: MessagesDataType[]
}
export const Dialogs = (props: DialogsProps) => {

    let dialogsElement = props.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    })

    let messageElement = props.messages.map((m) => {
        return (
            <Message key={m.id} message={m.message}/>
        )
    })

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
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

