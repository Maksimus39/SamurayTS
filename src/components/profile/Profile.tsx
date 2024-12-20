import React from "react";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/MyPostsContainer";

export type ContactsType = {
    facebook: string;
    github: string;
    instagram: string;
    mainLink: string;
    twitter: string;
    vk: string;
    website: null;
    youtube: null;
};

export type PhotosType = {
    large: string;
    small: string;
};

export type ProfileType = {
    aboutMe: string;
    contacts: ContactsType;
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    photos: PhotosType;
};

type ProfileProps = {
    profile: ProfileType;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean
    savePhoto: string
};

export const Profile = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileProps) => {

    return (
        <div>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}
                         isOwner={isOwner}
                         savePhoto={savePhoto}
            />

            <MyPostsContainer/>
        </div>
    );
};