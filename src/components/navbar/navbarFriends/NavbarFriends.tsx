import classes from "../Navbar.module.css";
import React from "react";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {FriendsDataType} from "../../redux/store";


type NavbarFriendsProps = {
    friends: FriendsDataType[]
}
type MapStatePropsType = {
    friends: FriendsDataType[]
}

const NavbarFriendsComponent: React.FC<NavbarFriendsProps> = ({friends}) => {
    return (
        <div>
            {friends.map((fr) => {
                return (
                    <div key={fr.id} className={classes.description}>
                        <div className={classes.text}>
                            {fr.name}
                        </div>
                        <img src={fr.img} alt={fr.name}/>
                    </div>
                );
            })}
        </div>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        friends: state.sidebarPage.friends
    }
}

export const NavbarFriends = connect(mapStateToProps)(NavbarFriendsComponent);


