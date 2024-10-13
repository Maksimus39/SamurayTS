import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return <div className={classes.dialogs}>
        <div className={classes.dialogsItem}>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/1'> Иван Иванович:</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/2'>Анна Петровна:</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/3'>Andrey:</NavLink>
            </div>
            <div className={classes.dialog}>
                <NavLink to='/dialogs/4'>Маша:</NavLink>
            </div>
        </div>
        <div className={classes.messages}>
            <div className={classes.message}>
                Иван Иванович – настоящий мужик! Высокий, крепкий, с румяными щеками.
                Работает на
                заводе, строгает доски, как никто другой. Любит поспорить о футболе, особенно когда играет "Спартак". В
                выходные рыбачит на своей лодке "Золотая рыбка". Готовит отлично, особенно любит жарить шашлыки на даче.
            </div>
            <div className={classes.message}>
                Анна Петровна – сердце семьи. Красивая, милая, всегда улыбается. Работает
                бухгалтером, но дома – настоящая хозяйка. Готовит, убирает, заботится о всех. Любит цветы, на
                подоконнике всегда стоят горшки с геранью и фиалками. В свободное время любит вязать, у нее есть целая
                коллекция свитеров и шапок.
            </div>
            <div className={classes.message}>
                Андрей – шумный, непоседливый, всегда в движении. Увлекается компьютерными
                играми,
                но не забывает и о спорте. Играет в футбол за школьную команду. У него много друзей, с ними он часто
                гуляет, катается на велосипеде. Мечтает стать программистом и создать свою игру.
            </div>
            <div className={classes.message}>
                Маша – маленькая красавица, с длинными кудрявыми волосами. Любит петь,
                танцевать,
                рисовать. В школе учится на "отлично", особенно любит математику. Мечтает стать актрисой и сниматься в
                кино. В свободное время увлекается чтением сказок и играми с куклами.
            </div>
        </div>
    </div>
}