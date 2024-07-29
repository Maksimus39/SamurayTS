import React from "react";
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import classes from './Profile.module.css'

export type PostDataType = {
    id: number
    message: string
    likesCount: number
}
type ProfileType = {
    postData: PostDataType[]
}
export const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )
}