import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655658c72ac2da7753ee753c_6556596de3bfcb307785efa6/scale_1200"
                    alt=""/>
            </div>

            <div>
                ava + description
            </div>

            <MyPosts/>
        </div>
    )
}