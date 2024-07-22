import React from "react";
import classes from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://www.funnyart.club/uploads/posts/2022-05/1653886640_47-www-funnyart-club-p-kartinki-sotsialnikh-setei-krasivo-56.png"
                    alt=""/>
            </div>

            <div>
                ava + description
            </div>

            <div>
                My Posts
                <div>
                    New Post
                </div>
                <div className='posts'>
                    <div className={classes.item}>
                        Post 1
                    </div>
                    <div className={classes.item}>
                        Post 2
                    </div>
                </div>

            </div>

        </div>
    )
}