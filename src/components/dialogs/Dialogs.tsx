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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>

            <div className={classes.messages}>

                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
            </div>
        </div>
    );
};

