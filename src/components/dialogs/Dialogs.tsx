import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <DialogItem name={'Macsim'} id={'1'}/>
                <DialogItem name={'Larisa'} id={'2'}/>
                <DialogItem name={'Andrey'} id={'3'}/>
                <DialogItem name={'Andrey'} id={'4'}/>

            </div>
            <div className={classes.messages}>
                <Message message={'Привет, как твои дела?'}/>
                <Message message={'Привет, ты будеш ужинать!'}/>
                <Message message={'Мам, можно я пойду погуляю с друзьями?'}/>
                <Message message={'Пап, помоги мне с домашним заданием по математике.'}/>
            </div>
        </div>
    );
};

