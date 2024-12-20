import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import classes from './ProfileInfo.module.css';
import {ProfileStatusWithHooks} from "../ProfileStatusWithHooks";
import {Contacts} from "./Contacts";
import userPhoto from "../../assets/images/user.png";
import {ProfileType} from "../Profile";

export type ProfileInfoProps = {
    profile: ProfileType | null;
    status: string;
    updateStatus: (status: string) => void;
    isOwner: boolean
    savePhoto: any
};

export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    const {profile, status, updateStatus, isOwner, savePhoto} = props;

    const onMainPhotoSelected = (event: any) => {
        if (event.target.files.length) {
            savePhoto(event.target.files[0]);
        }
    }


    return (
        <>
            <div className={classes.avatar}>
                <img
                    src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655658c72ac2da7753ee753c_6556596de3bfcb307785efa6/scale_1200"
                    alt="Profile background"
                />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <h4>status: <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}/>
                </h4>
            </div>

            <div>
                <img src={profile.photos.large || userPhoto}
                     alt="Profile avatar"
                     className={classes.profileBackground}
                />
                <div>
                    <h2>Обо мне: {profile.aboutMe}</h2>
                    <Contacts contacts={profile.contacts}/>
                    <h2>Моё имя: {profile.fullName}</h2>
                    <h2>Место работы: {profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}</h2>
                    <h2>Вакансии: {profile.lookingForAJobDescription}</h2>
                </div>
            </div>
        </>
    );
};