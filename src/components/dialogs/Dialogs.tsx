import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {

    DialogsPageType,
    DispatchType,

} from "../redux/state";
import {addNewMessageTextActionCreator, updateNewMessageTextActionCreator} from "../redux/reducer/dialogsPageReducer";


type DialogsProps = {
    dialogsPage: DialogsPageType
    dispatch: (action: DispatchType) => void
    newMessageText: string
}
export const Dialogs = (props: DialogsProps) => {

    let dialogsElement = props.dialogsPage.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    })

    let messageElement = props.dialogsPage.messages.map((m) => {
        return (
            <Message key={m.id} message={m.message}/>
        )
    })

    const newMessageElement = useRef<HTMLTextAreaElement>(null);

    const addMessageHandler = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.dispatch(addNewMessageTextActionCreator(message))
        }
    }

    const onMessageChange = () => {
        if (newMessageElement.current) {
            const message = newMessageElement.current.value;
            props.dispatch(updateNewMessageTextActionCreator(message))
        }
    }

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
                        <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}
                                  placeholder={'Enter a message...'}/>
                    </div>
                    <div>
                        <button onClick={addMessageHandler}>Add Message</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

