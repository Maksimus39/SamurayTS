import React from "react";
import {Preloader} from "../../common/preloader/Preloader";
import {ContactsType, ProfileType} from "../Profile";
import classes from './ProfileInfo.module.css'
import {ProfileStatus} from "../ProfileStatus";


type ProfileInfoProps = {
    profile: ProfileType;
    status: string
    updateStatus: string
}

const Contacts = ({contacts}: { contacts: ContactsType }) => (
    <div>
        <h3>Мои контакты!</h3>
        {Object.entries(contacts).map(([key, value]) => (
            value ? <div key={key}>{key}: {value}</div> : null
        ))}
    </div>
);

export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    const {profile} = props;

    return (
        <React.Fragment>
            <div className={classes.avatar}>
                <img
                    src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655658c72ac2da7753ee753c_6556596de3bfcb307785efa6/scale_1200"
                    alt="Profile background"
                />
                <h4>status: <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}/>
                </h4>
            </div>

            <div>
                <img src={profile.photos.small}
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
        </React.Fragment>
    );
}