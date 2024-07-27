import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogPropsItem = {
    name: string
    id: string
}
export const DialogItem = (props: DialogPropsItem) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
        </div>
    )
}