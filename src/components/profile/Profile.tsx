import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";


type Props = {
    posts: PostsType[];
}
export const Profile = ({posts}: Props) => {
    return (
        <div>
            <div className={styles.profileImg}>
                <ProfileInfo/>
                <div><MyPosts posts={posts}/></div>
            </div>
        </div>
    )
}