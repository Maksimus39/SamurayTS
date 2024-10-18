import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = ({name, id}: DialogItemPropsType) => {
    let path = '/dialogs/' + id

    return (
        <div key={id}>
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
const Message = ({id, message}: MessageProps) => {
    return (
        <div className={classes.message} key={id}>
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
