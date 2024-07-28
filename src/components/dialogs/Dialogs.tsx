import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


export const Dialogs = () => {

    let dialogsData = [
        {id: "1", name: 'Macsim'},
        {id: "2", name: 'Larisa'},
        {id: "3", name: 'Andrey'},
        {id: "4", name: 'Bogdan'},
    ]

    let messagesData = [
        {message: 'Привет, как твои дела?'},
        {message: 'Привет, ты будеш ужинать!'},
        {message: 'Мам, можно я пойду погуляю с друзьями?'},
        {message: 'Пап, помоги мне с домашним заданием по математике.'},
    ]

    let dialogsElement = dialogsData.map((dialog) => {
        return (
            <DialogItem name={dialog.name} id={dialog.id}/>
        )
    })

    let messageElement = messagesData.map((message) => {
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

