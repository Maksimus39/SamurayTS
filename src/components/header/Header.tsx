import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderProps = {
    isAuth: boolean,
    email: string,
    login: string,
    logout: () => void
}
export const Header = (props: HeaderProps) => {

    return (
        <header className={classes.header}>
            <img
                src='https://avatars.mds.yandex.net/i?id=7a3f7ada082cecc5d96c66033cf2bff22b65750c-10126262-images-thumbs&n=13'
                alt=""/>

            <div className={classes.loginBlock}>

                {props.isAuth
                    ? <div>
                        <div>{props.login}
                            <button onClick={props.logout}>Log out</button>
                        </div>
                        <div>{props.email}</div>
                    </div>

                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>
    )
}