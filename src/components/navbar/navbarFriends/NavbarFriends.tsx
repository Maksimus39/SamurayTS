import {FriendsDataType} from "../../redux/state";
import classes from "../Navbar.module.css";
import React from "react";

type NavbarFriendsProps = {
    friends: FriendsDataType[]
}
export const NavbarFriends = (props: NavbarFriendsProps) => {
    return (

        <div>
            {props.friends.map((fr) => {
                return (
                    <div className={classes.description}>
                        <div className={classes.text}>
                            {fr.name}
                        </div>
                        <img src={fr.img} alt={fr.name}/>
                    </div>
                )
            })}
        </div>
    )
}