import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../redux/state";


type DialogsProps = {
    state: DialogsPageType
}
export const Dialogs = (props: DialogsProps) => {

    let dialogsElement = props.state.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    })

    let messageElement = props.state.messages.map((m) => {
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

