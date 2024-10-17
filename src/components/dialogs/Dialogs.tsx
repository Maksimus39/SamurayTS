import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = ({name, id}: DialogItemPropsType) => {
    let path = '/dialogs/' + id

    return (
        <div>
            <div className={classes.dialog}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}


type MessageProps = {
    id: number
    message: string
}
const Message = ({message}: MessageProps) => {
    return (
        <div className={classes.message}>
            {message}
        </div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Иван Иванович:'},
        {id: 2, name: 'Анна Петровна:'},
        {id: 3, name: 'Andrey:'},
        {id: 4, name: 'Маша:'}
    ]

    let messageData = [
        {
            id: 1,
            message: 'Иван Иванович – настоящий мужик! Высокий, крепкий, с румяными щеками.'
        },
        {
            id: 2,
            message: 'Анна Петровна – сердце семьи. Красивая, милая, всегда улыбается. Работает бухгалтером, но дома – настоящая хозяйка.'
        },
        {
            id: 3,
            message: 'Андрей – шумный, непоседливый, всегда в движении. Увлекается компьютерными играми, но не забывает и о спорте.'
        },
        {
            id: 4,
            message: 'Маша – маленькая красавица, с длинными кудрявыми волосами. Любит петь, танцевать, рисовать.'
        }

    ]


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>

            <div className={classes.messages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
                <Message id={messageData[2].id} message={messageData[2].message}/>
                <Message id={messageData[3].id} message={messageData[3].message}/>
            </div>
        </div>
    );
};
