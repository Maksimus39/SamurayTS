import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import classes from './Profile.module.css'
import {PostDataType} from "../redux/state";



type ProfileType = {
    posts: PostDataType[]
}

export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}