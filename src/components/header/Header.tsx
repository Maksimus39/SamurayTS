import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


type HeaderProps = {
    img:string
}
export const Header = (props: HeaderProps) => {
    return (
        <header className={classes.header}>
            <img src={props.img} alt=""/>

            <div className={classes.loginBlock}>
                <NavLink to={'/login'}>
                    Login
                </NavLink>
            </div>
        </header>
    )
}