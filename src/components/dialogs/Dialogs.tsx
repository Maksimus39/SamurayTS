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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={'Иван Иванович:'} id={1}/>
                <DialogItem name={'Анна Петровна:'} id={2}/>
                <DialogItem name={'Andrey:'} id={3}/>
                <DialogItem name={'Маша:'} id={4}/>
            </div>

            <div className={classes.messages}>
                <div className={classes.message}>
                    <Message
                        message={'Иван Иванович – настоящий мужик! Высокий, крепкий, с румяными щеками. Работает на заводе, строгает доски, как никто другой. Любит поспорить о футболе, особенно когда играет "Спартак". В выходные рыбачит на своей лодке "Золотая рыбка". Готовит отлично, особенно любит жарить шашлыки на даче.'}
                    />
                </div>
                <div className={classes.message}>
                    <Message
                        message={'Анна Петровна – сердце семьи. Красивая, милая, всегда улыбается. Работает бухгалтером, но дома – настоящая хозяйка. Готовит, убирает, заботится о всех. Любит цветы, на подоконнике всегда стоят горшки с геранью и фиалками. В свободное время любит вязать, у нее есть целая коллекция свитеров и шапок.'}
                    />
                </div>
                <div className={classes.message}>
                    <Message
                        message={'Андрей – шумный, непоседливый, всегда в движении. Увлекается компьютерными играми, но не забывает и о спорте. Играет в футбол за школьную команду. У него много друзей, с ними он часто гуляет, катается на велосипеде. Мечтает стать программистом и создать свою игру.'}
                    />
                </div>
                <div className={classes.message}>
                    <Message
                        message={'Маша – маленькая красавица, с длинными кудрявыми волосами. Любит петь, танцевать, рисовать. В школе учится на "отлично", особенно любит математику. Мечтает стать актрисой и сниматься в кино. В свободное время увлекается чтением сказок и играми с куклами.'}
                    />
                </div>
            </div>
        </div>
    );
};
