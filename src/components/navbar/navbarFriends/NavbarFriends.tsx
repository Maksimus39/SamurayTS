import classes from "../Navbar.module.css";
import React from "react";
import {StoreContext} from "../../StoreContext";

export const NavbarFriends = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const friends = store.getState().sidebarPage.friends; // Предполагается, что friends находятся в store.getState()
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
            }}
        </StoreContext.Consumer>
    );
};