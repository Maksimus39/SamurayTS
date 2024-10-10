import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={styles.profileImg}>
                <img
                    src="https://static01.nyt.com/images/2020/10/05/arts/05social-network01/05social-network01-superJumbo-v3.jpg?quality=75&auto=webp"
                    alt=""/>

                <div>ava + description</div>
                <div>
                    <MyPosts/>
                </div>
            </div>
        </div>
    )
}