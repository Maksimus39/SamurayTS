import React from "react";
import classes from './ProfileInfo.module.css'
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoProps = {
    profile: {
        photos:{
            large:string
        }
    }
}
export const ProfileInfo = (props: ProfileInfoProps) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_655658c72ac2da7753ee753c_6556596de3bfcb307785efa6/scale_1200"
                    alt=""/>
            </div>

            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                ava + description
            </div>
        </div>
    )
}