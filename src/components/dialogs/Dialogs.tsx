import React from 'react';
import classes from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Macsim
                </div>
                <div className={classes.dialog}>
                    Larisa
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Bogdan
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

