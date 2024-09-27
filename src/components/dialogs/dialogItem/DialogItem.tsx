import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


type DialogPropsItem = {
    img: string
    id: number
    name: string
}
export const DialogItem = ({img,id,name}: DialogPropsItem) => {
    return (
        <div>
            <div className={classes.dialog + ' ' + classes.active}>
                <NavLink to={'/dialogs/1' + id}>
                    {name}</NavLink>
            </div>

            <div className={classes.avatar}>
                <img src={img} alt=""/>
            </div>
        </div>
    )
}