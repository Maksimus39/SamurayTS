import React from 'react';
import classes from "./Post.module.css"

type PostProps = {
    message: string
    likesCount: number
}
export const Post = ({
    message,likesCount
                     }: PostProps) => {
    return (
        <div className={classes.item}>
            <img
                src="https://sneg.top/uploads/posts/2023-06/1687597602_sneg-top-p-ava-obshchenie-instagram-1.jpg"
                alt=""/>
            <span>{message}</span>
            <div>
                <span>Likes {likesCount}</span>
            </div>
        </div>
    );
};

