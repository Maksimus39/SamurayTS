import classes from "../Dialogs.module.css";
import React from "react";

type MessageProps = {
    message: string
}
export const Message = (props: MessageProps) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}