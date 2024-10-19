import classes from './../Dialogs.module.css'


export type Props = {
    id: number
    message: string
}
export const Message = ({id, message}: Props) => {
    return (
        <div className={classes.message} key={id}>
            {message}
        </div>
    )
}

