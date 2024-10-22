import classes from './Dialogs.module.css'
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsDataType, MessageDataType} from "../../redux/state";


type Props = {
    dialogsData: DialogsDataType[]
    messageData: MessageDataType[]
}

export const Dialogs = ({dialogsData, messageData}: Props) => {

    let dialogsElement = dialogsData.map(d => {
        return <DialogItem name={d.name} id={d.id}/>
    })

    let messageElement = messageData.map(m => {
        return <Message id={m.id} message={m.message}/>
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>

                {dialogsElement}
            </div>

            <div className={classes.messages}>

                {messageElement}
            </div>
        </div>
    );
};
