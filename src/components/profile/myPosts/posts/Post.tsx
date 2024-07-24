import React from 'react';
import classes from "./Post.module.css"

type PostProps = {
    message: string
}
export const Post = (props: PostProps) => {
    return (
        <div className={classes.item}>
            <img
                src="https://sneg.top/uploads/posts/2023-06/1687597602_sneg-top-p-ava-obshchenie-instagram-1.jpg"
                alt=""/>
            <span>{props.message}</span>
            <div>
                <span>Like</span>
            </div>
        </div>
    );
};

