import React from 'react';
import classes from './Dialogs.module.css';
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {Textarea} from "../common/formsControls/FormsControls";


export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map((d) => {
        return (
            <DialogItem key={d.id} name={d.name} id={d.id} img={d.img}/>
        )
    });

    let messageElement = state.messages.map((m) => {
        return (
            <Message key={m.id} message={m.message}/>
        )
    });

    const addNewMessage = (values: AddMessageFormValuesType) => {
        props.sendMessage(values.newMessageText)

    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
};


// Интерфейс для значений формы
interface AddMessageFormValuesType {
    newMessageText: string;
}

// Типизация пропсов для AddMessageForm
type AddMessageFormPropsType = InjectedFormProps<AddMessageFormValuesType>;

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props: AddMessageFormPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newMessageText'}
                       placeholder={'Enter a message...'}
                       validate={[required, maxLength50]}
                />
            </div>

            <div>
                <button>Add Message</button>
            </div>

        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormValuesType>({form: 'addMessageForm'})(AddMessageForm);