import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type Props = {
    name: string
    id: number
}
export const DialogItem = ({name, id}: Props) => {
    let path = '/dialogs/' + id

    return (
        <div key={id}>
            <div className={classes.dialog}>
                <NavLink to={path}>{name}</NavLink>
            </div>
        </div>
    )
}

