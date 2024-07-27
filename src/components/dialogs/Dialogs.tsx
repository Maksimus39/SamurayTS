import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to={'/dialogs/1'}>Macsim</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/2'}>Larisa</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/3'}>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to={'/dialogs/4'}>Bogdan</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Привет, как твои дела?</div>
                <div className={classes.message}>Привет, ты будеш ужинать!</div>
                <div className={classes.message}>Мам, можно я пойду погуляю с друзьями?</div>
                <div className={classes.message}>Пап, помоги мне с домашним заданием по математике.</div>
            </div>
        </div>
    );
};

