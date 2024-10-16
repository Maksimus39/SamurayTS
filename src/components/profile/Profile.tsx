import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <div className={styles.profileImg}>
                <ProfileInfo/>
                <div><MyPosts/></div>
            </div>
        </div>
    )
}