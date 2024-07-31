import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogPropsItem = {
    img: string
    id: string
    name: string
}
export const DialogItem = (props: DialogPropsItem) => {
    return (
        <div>
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to={'/dialogs/1' + props.id}>
                    {props.name}</NavLink>
            </div>

            <div className={classes.avatar}>
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}